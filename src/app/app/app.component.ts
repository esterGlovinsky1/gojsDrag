import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import * as go from 'gojs';




@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('mapDiagramRef', { static: true }) diagramDiv: ElementRef;
    diagram: any;
    visible: any;

    constructor() {
        go.Diagram.licenseKey = "298647e1b16e4cc702d90776423d68f919a175639d841aa45e0310f6ef083c06329eea2857d3899385af46fc1d7cc8d088c16f21c048553de63181df45e0d2aab63377a0040e12dea203749398e83aa2fd7b73edc5aa74a5";
    }

    ngOnInit() {
        let $ = go.GraphObject.make;
        this.diagram = $(go.Diagram, this.diagramDiv.nativeElement,
            {
                initialContentAlignment: go.Spot.TopRight,
                "animationManager.isEnabled": false,
                scrollMode: go.Diagram.InfiniteScroll,
                hasHorizontalScrollbar: false,
                hasVerticalScrollbar: false,
                "toolManager.hoverDelay": 100,
                groupTemplate: this.getGroupTemplate(),
                "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
                "commandHandler.zoomFactor": 1.25,
                allowUndo: false,
                handlesDragDropForTopLevelParts: true,
                "toolManager.holdDelay": 0,
                contentAlignment: go.Spot.TopCenter,
                allowInsert: true,
                validCycle: go.Diagram.CycleNotDirected,
                allowDragOut: true
            });
        this.diagram.addDiagramListener("ObjectDoubleClicked", (e) => {
            this.visible = true
        });

        this.diagram.add(
            $(go.Part, go.Panel.Position,
                { background: "lightgray" },
                $(go.TextBlock, "open dialog", { background: "lightgreen", font: '30px sans-serif' }),
            ));
    }

    getGroupTemplate() {
        let $ = go.GraphObject.make;
        let groupTemplate =
            $(go.Group, {
                layout: null, location: new go.Point(0, 0), handlesDragDropForMembers: true
            }
            );
        return groupTemplate;
    }

    openDialog() {
        this.visible = true;
    }
}
