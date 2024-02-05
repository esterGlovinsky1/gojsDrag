import { Component, ElementRef, ViewChild } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent {
  @ViewChild('mapDiagramRef', { static: true }) diagramDiv: ElementRef;
  diagram: any;

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
        validCycle: go.Diagram.CycleNotDirected
      });

      this.diagram.add(
        $(go.Part, go.Panel.Position, 
            { background: "lightgray", width: 100, height: 100 },
            $(go.TextBlock, "drag me out of the dialog", { background: "lightgreen", width: 100, height: 100, font: '20px sans-serif' }),
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
}
