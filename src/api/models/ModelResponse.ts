/* tslint:disable */
/* eslint-disable */
/**
 * 半自動センサー校正器「コウセイくん☆」Web API
 * 情報工学実験1A 実世界センシングで作成した半自動センサー校正器「コウセイくん☆」のWeb APIです。このWeb APIを利用することにより、Webページ、LINE、Discordなど様々なフロントエンドからコウセイくん☆を利用することができます。
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: yuma140902@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelResponse
 */
export interface ModelResponse {
    /**
     * 
     * @type {string}
     * @memberof ModelResponse
     */
    expression: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelResponse
     */
    parameters: Array<string>;
}

/**
 * Check if a given object implements the ModelResponse interface.
 */
export function instanceOfModelResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "expression" in value;
    isInstance = isInstance && "parameters" in value;

    return isInstance;
}

export function ModelResponseFromJSON(json: any): ModelResponse {
    return ModelResponseFromJSONTyped(json, false);
}

export function ModelResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'expression': json['expression'],
        'parameters': json['parameters'],
    };
}

export function ModelResponseToJSON(value?: ModelResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'expression': value.expression,
        'parameters': value.parameters,
    };
}
