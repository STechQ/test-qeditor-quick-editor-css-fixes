import "reflect-metadata";
import { IPresentation } from "./domain/presentation/IPresentation";
import { IStepRepo } from "./domain/useCase/IStepRepo";
import { IStepOptions } from "../../flowInterfaces/editor/IStepOptions";
import { DependencyContainer } from "./domain/core/diContainer";
import { IExportTypeMap, IImportExport } from "./domain/useCase/IImportExport";
import { IInitOptions } from "./domain/core/IStartUp";
import { IHistory } from "./domain/useCase/IHistory";
import { IFlowCopyModel, IFlowDesignModel } from "../../flowInterfaces/editor/IFlowDesignModel";
import { IFlowEditorState } from "../../flowInterfaces/editor/IFlowEditorState";
import { IState } from "./domain/useCase/IState";
export declare class Program {
    private readonly container;
    private readonly state;
    private readonly presentation;
    private readonly stepRepo;
    private readonly importExport;
    private readonly history;
    constructor(container?: DependencyContainer, state?: () => IState, presentation?: () => IPresentation, stepRepo?: () => IStepRepo, importExport?: () => IImportExport, history?: () => IHistory);
    private inited;
    private destroyed;
    init(options: IInitOptions): Promise<void>;
    destroy(): Promise<void>;
    private assert;
    private mounted;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    registerStep(step: IStepOptions | string): void;
    exportModel<KType extends keyof IExportTypeMap>(type: KType): IExportTypeMap[KType];
    importModel(model: IFlowDesignModel): Promise<void>;
    copy(): IFlowCopyModel;
    paste(model: IFlowCopyModel): Promise<void>;
    getState(): IFlowEditorState;
    setState(state?: IFlowEditorState): void;
    setReadonly(readonly: boolean): void;
    undo(): Promise<boolean>;
    redo(): Promise<boolean>;
}
//# sourceMappingURL=program.d.ts.map