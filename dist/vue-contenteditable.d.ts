declare module "components/__VLS_types" {
    import * as vue from 'vue';
    import type { FunctionalComponent, HTMLAttributes, VNodeProps, AllowedComponentProps, EmitsOptions, DefineComponent, SetupContext, ObjectDirective, FunctionDirective } from 'vue';
    type IsAny<T> = boolean extends (T extends never ? true : false) ? true : false;
    type IsFunctionalComponent<T> = T extends (...args: any) => JSX.Element ? true : false;
    type IsConstructorComponent<T> = T extends new (...args: any) => JSX.ElementClass ? true : false;
    type IsComponent_Loose<T> = IsConstructorComponent<T> extends false ? IsFunctionalComponent<T> extends false ? false : true : true;
    type IsComponent_Strict<T> = IsConstructorComponent<T> extends true ? true : IsFunctionalComponent<T> extends true ? true : false;
    type ComponentKeys<T> = keyof {
        [K in keyof T as IsComponent_Loose<T[K]> extends true ? K : never]: any;
    };
    export type PickNotAny<A, B> = IsAny<A> extends true ? B : A;
    type AnyArray<T = any> = T[] | readonly T[];
    type ForableSource<T> = [
        T extends {
            [Symbol.iterator](): IterableIterator<infer T1>;
        } ? T1 : T[keyof T],
        typeof Symbol.iterator extends keyof T ? number : T extends T ? keyof T : never,
        typeof Symbol.iterator extends keyof T ? undefined : number
    ][];
    type CamelCase<S extends string> = S extends `${infer First}-${infer Right}` ? Capitalize<Right> extends Right ? `${First}-${CamelCase<Capitalize<Right>>}` : `${First}${CamelCase<Capitalize<Right>>}` : S;
    export type GlobalComponents = PickNotAny<import('vue').GlobalComponents, {}> & PickNotAny<import('@vue/runtime-dom').GlobalComponents, {}> & Pick<typeof vue, 'Transition' | 'TransitionGroup' | 'KeepAlive' | 'Suspense' | 'Teleport'>;
    export function getVforSourceType<T>(source: T): ForableSource<NonNullable<T extends number ? number[] : T extends string ? string[] : T>>;
    export function getNameOption<T>(t?: T): T extends {
        name: infer N;
    } ? N : undefined;
    export function directiveFunction<T>(dir: T): T extends ObjectDirective<infer E, infer V> ? undefined extends V ? (value?: V) => void : (value: V) => void : T extends FunctionDirective<infer E, infer V> ? undefined extends V ? (value?: V) => void : (value: V) => void : T;
    export type HasScriptSlotsType<T> = T extends new (...args: any) => {
        $slots?: infer _;
    } ? true : false;
    export type DefaultSlots<C> = HasScriptSlotsType<C> extends true ? {} : Record<string, any>;
    export type WithSlots<T> = T extends new (...args: any) => {
        $slots?: infer S;
    } ? T : new (...args: any) => {
        $slots: {};
    };
    export type ScriptSlots<T> = T extends {
        $slots?: infer S;
    } ? {
        [K in keyof S]-?: S[K] extends ((obj: infer O) => any) | undefined ? O : S[K];
    } : {};
    export type GetComponentName<T, K extends string> = K extends keyof T ? IsAny<T[K]> extends false ? K : GetComponentName_CamelCase<T, CamelCase<K>> : GetComponentName_CamelCase<T, CamelCase<K>>;
    export type GetComponentName_CamelCase<T, K extends string> = K extends keyof T ? IsAny<T[K]> extends false ? K : GetComponentName_CapitalCase<T, Capitalize<K>> : GetComponentName_CapitalCase<T, Capitalize<K>>;
    export type GetComponentName_CapitalCase<T, K> = K extends keyof T ? K : never;
    export type FillingEventArg_ParametersLength<E extends (...args: any) => any> = IsAny<Parameters<E>> extends true ? -1 : Parameters<E>['length'];
    export type FillingEventArg<E> = E extends (...args: any) => any ? FillingEventArg_ParametersLength<E> extends 0 ? ($event?: undefined) => ReturnType<E> : E : E;
    export type GetProperty<T, K, N = any> = K extends keyof T ? T[K] : N;
    export type ComponentContext<T> = T extends new (...args: any) => any ? InstanceType<T> : T extends (...args: any) => any ? ReturnType<T> : T;
    export type OptionsProps<T> = T extends {
        props: infer R;
    } ? R : {};
    export type SelectComponent<T1, T2> = T1 extends (new (...args: any) => any) ? T1 : T1 extends ((...args: any) => any) ? T1 : T2;
    export type ExtractEmit2<T> = T extends FunctionalComponent<infer _, infer E> ? SetupContext<E>['emit'] : T extends new (...args: any) => {
        $emit: infer Emit;
    } ? Emit : unknown;
    export type ReturnVoid<T> = T extends (...payload: infer P) => any ? (...payload: P) => void : (...args: any) => void;
    export type EmitEvent2<F, E> = F extends {
        (event: E, ...payload: infer P): infer R;
    } ? (...payload: P) => void : F extends {
        (event: E, ...payload: infer P): infer R;
        (...args: any): any;
    } ? (...payload: P) => void : F extends {
        (event: E, ...payload: infer P): infer R;
        (...args: any): any;
        (...args: any): any;
    } ? (...payload: P) => void : F extends {
        (event: E, ...payload: infer P): infer R;
        (...args: any): any;
        (...args: any): any;
        (...args: any): any;
    } ? (...payload: P) => void : unknown | '[Type Warning] Volar could not infer $emit event more than 4 overloads without DefineComponent. see https://github.com/johnsoncodehk/volar/issues/60';
    export type EmitEvent<T, E> = T extends DefineComponent<infer _, any, any, any, any, any, any, infer E2> ? EmitEvent_3<E2, E> : T extends FunctionalComponent<infer _, infer E2> ? EmitEvent_3<E2, E> : T extends FunctionalComponent<infer _, infer E> ? EmitEvent2<SetupContext<E>['emit'], E> : unknown;
    export type EmitEvent_3<E2, E> = EmitsOptions extends E2 ? unknown : E2 extends AnyArray<infer K> ? (E extends K ? (...args: any) => void : unknown) : E extends keyof E2 ? ReturnVoid<E2[E]> : unknown;
    export type FirstFunction<F0 = void, F1 = void, F2 = void, F3 = void> = NonNullable<F0> extends (Function | AnyArray<Function>) ? F0 : NonNullable<F1> extends (Function | AnyArray<Function>) ? F1 : NonNullable<F2> extends (Function | AnyArray<Function>) ? F2 : NonNullable<F3> extends (Function | AnyArray<Function>) ? F3 : unknown;
    export type GlobalAttrsBase = VNodeProps & AllowedComponentProps;
    export type GlobalAttrs = GlobalAttrsBase & HTMLAttributes;
    export type PickComponents<T> = ComponentKeys<T> extends keyof T ? Pick<T, ComponentKeys<T>> : T;
    export type ConvertInvalidComponents<T> = {
        [K in keyof T]: IsComponent_Strict<T[K]> extends true ? T[K] : any;
    };
    export type SelfComponent<N, C> = string extends N ? {} : N extends string ? {
        [P in N]: C;
    } : {};
}
declare module "components/contenteditable.vue.__VLS_script" {
    import { defineProps, ref, computed, onMounted, watch } from 'vue';
    const _default: import("vue").DefineComponent<{
        tag: StringConstructor;
        contenteditable: {
            type: (StringConstructor | BooleanConstructor)[];
            default: boolean;
        };
        modelValue: StringConstructor;
        noHtml: {
            type: BooleanConstructor;
            default: boolean;
        };
        noNl: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        defineProps: typeof defineProps;
        ref: typeof ref;
        computed: typeof import("@vue/reactivity").computed;
        onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        watch: typeof watch;
        replaceAll: (str: string, search: string, replacement: string) => string;
        props: Readonly<import("vue").ExtractPropTypes<{
            tag: StringConstructor;
            contenteditable: {
                type: (StringConstructor | BooleanConstructor)[];
                default: boolean;
            };
            modelValue: StringConstructor;
            noHtml: {
                type: BooleanConstructor;
                default: boolean;
            };
            noNl: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>;
        emit: ((event: "returned", value?: any) => void) & ((event: "update:modelValue", value?: any) => void);
        element: import("vue").Ref<HTMLElement | null | undefined>;
        currentContent: () => string;
        updateContent: (newcontent: string) => void;
        update: (event: any) => void;
        onPaste: (event: any) => void;
        onKeypress: (event: any) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        returned: StringConstructor;
        'update:modelValue': StringConstructor;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        tag: StringConstructor;
        contenteditable: {
            type: (StringConstructor | BooleanConstructor)[];
            default: boolean;
        };
        modelValue: StringConstructor;
        noHtml: {
            type: BooleanConstructor;
            default: boolean;
        };
        noNl: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onReturned?: ((value?: any) => any) | undefined;
        "onUpdate:modelValue"?: ((value?: any) => any) | undefined;
    }, {
        contenteditable: string | boolean;
        noHtml: boolean;
        noNl: boolean;
    }>;
    export default _default;
    export const __VLS_options: {
        props: {
            tag: StringConstructor;
            contenteditable: {
                type: (StringConstructor | BooleanConstructor)[];
                default: boolean;
            };
            modelValue: StringConstructor;
            noHtml: {
                type: BooleanConstructor;
                default: boolean;
            };
            noNl: {
                type: BooleanConstructor;
                default: boolean;
            };
        };
        emits: {
            returned: StringConstructor;
            'update:modelValue': StringConstructor;
        };
    };
    export const __VLS_name: 'contenteditable';
    export { defineProps as __VLS_types_defineProps, ref as __VLS_types_ref, computed as __VLS_types_computed, onMounted as __VLS_types_onMounted, watch as __VLS_types_watch, };
}
declare module "components/contenteditable.vue.__VLS_template" {
    var __VLS_slots: {};
    export default __VLS_slots;
}
declare module "components/contenteditable.vue" {
    const _default_1: import("vue").DefineComponent<{
        tag: StringConstructor;
        contenteditable: {
            type: (StringConstructor | BooleanConstructor)[];
            default: boolean;
        };
        modelValue: StringConstructor;
        noHtml: {
            type: BooleanConstructor;
            default: boolean;
        };
        noNl: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        returned: StringConstructor;
        'update:modelValue': StringConstructor;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        tag: StringConstructor;
        contenteditable: {
            type: (StringConstructor | BooleanConstructor)[];
            default: boolean;
        };
        modelValue: StringConstructor;
        noHtml: {
            type: BooleanConstructor;
            default: boolean;
        };
        noNl: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onReturned?: ((value?: any) => any) | undefined;
        "onUpdate:modelValue"?: ((value?: any) => any) | undefined;
    }, {
        contenteditable: string | boolean;
        noHtml: boolean;
        noNl: boolean;
    }>;
    export default _default_1;
}
declare module "vue-contenteditable" {
    import contenteditable from "components/contenteditable.vue";
    export default contenteditable;
}
