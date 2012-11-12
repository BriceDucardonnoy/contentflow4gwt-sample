/**
 * Copyright (c) 2011 Canoo Engineering AG info@canoo.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

package com.canoo.gwt.contentflow4gwt.client;

import com.canoo.gwt.contentflow4gwt.client.model.Person;
import com.google.gwt.animation.client.Animation;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
import com.reveregroup.gwt.imagepreloader.client.FitImage;
import org.gwt.contentflow4gwt.client.ContentFlow;
import org.gwt.contentflow4gwt.client.ContentFlowItemClickListener;
import org.gwt.contentflow4gwt.client.PhotoView;

public class ContentFlowDemo implements EntryPoint {
    private static final int POPUP_WIDTH = 1000;
    private static final int POPUP_HEIGHT = 600;
    private static final Person[] PEOPLE = new Person[]{
            new Person("Steve Jobs", "photos/jobs.jpg"),
            new Person("Bill Gates", "photos/gates.jpg"),
            new Person("Sergey Brin", "photos/brin.jpg"),
            new Person("Larry Page", "photos/page.jpg"),
            new Person("John Doerr", "photos/doerr.jpg"),
            new Person("Eric Schmidt", "photos/schmidt.jpg"),
            new Person("Larry Wayne", "photos/wayne.jpg"),
            new Person("Steve Wozniak", "photos/wozniak.jpg"),
            new Person("John Cook", "photos/cook.jpg")
    };
    private static final int ANIMATION_DURATION = 1000;

    public void onModuleLoad() {
        GWT.setUncaughtExceptionHandler(new GWT.UncaughtExceptionHandler() {
            public void onUncaughtException(Throwable e) {
                Window.alert("Exception: " + e.getMessage());
            }
        });

        Button inButtonPhotos = new Button("Come in with photos!", new ClickHandler() {
            public void onClick(ClickEvent event) {
                doAnimateContentFlowIn();
            }
        });

        Panel buttonsPanel = new FlowPanel();

        buttonsPanel.add(inButtonPhotos);

        RootPanel.get().add(buttonsPanel);
    }

    private ContentFlowPopupPanel<Person> doAnimateContentFlowIn() {
        int horizontalMargin = (Window.getClientWidth() - POPUP_WIDTH) / 2;
        int verticalMargin = (Window.getClientHeight() - POPUP_HEIGHT) / 2;
        final int initialLeft = Window.getClientWidth() + horizontalMargin;

        ContentFlow<Person> contentFlow = new ContentFlow<Person>(true, true);
        addItems(contentFlow, PEOPLE.length);
        final ContentFlowPopupPanel<Person> popupPanel = new ContentFlowPopupPanel<Person>(contentFlow);

        popupPanel.setSize(POPUP_WIDTH + "px", POPUP_HEIGHT + "px");
        popupPanel.setPopupPosition(initialLeft, verticalMargin);
        contentFlow.addItemClickListener(new ContentFlowItemClickListener() {
            public void onItemClicked(Widget widget) {
                Window.alert("Clicked: ");
            }
        });
        popupPanel.show();

        animatePopupPanel(popupPanel, initialLeft, horizontalMargin, ANIMATION_DURATION);

        return popupPanel;
    }

    private void animatePopupPanel(final PopupPanel popupPanel, final int initialLeft, final int finalLeft, int duration) {
        new Animation() {
            @Override
            protected void onUpdate(double progress) {
                int left = (int) (((1 - progress) * initialLeft) + (progress * finalLeft));
                popupPanel.setPopupPosition(left, 100);
            }
        }.run(duration);
    }

    private void addItems(ContentFlow<Person> contentFlow, int number) {
        for (final Person person : generatePeople(number)) {
            contentFlow.addItems(createImageView(person));
        }
    }

    private PhotoView createImageView(Person person) {
        return new PhotoView(new FitImage(person.getImageUrl()), person.getName());
    }

    private Person[] generatePeople(int number) {
        Person[] result = new Person[number];

        for (int i = 0; i < number; i++) {
            result[i] = PEOPLE[i % PEOPLE.length];
        }

        return result;
    }

    private static class ContentFlowPopupPanel<T> extends PopupPanel {
        private final ContentFlow<T> fContentFlow;

        private ContentFlowPopupPanel(ContentFlow<T> contentFlow) {
            add(fContentFlow = contentFlow);
        }

    }
}
