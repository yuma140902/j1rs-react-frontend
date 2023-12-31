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
 * @interface MRequest
 */
export interface MRequest {
    /**
     * 
     * @type {number}
     * @memberof MRequest
     */
    index: number;
    /**
     * 
     * @type {number}
     * @memberof MRequest
     */
    value: number;
}

/**
 * Check if a given object implements the MRequest interface.
 */
export function instanceOfMRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "index" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function MRequestFromJSON(json: any): MRequest {
    return MRequestFromJSONTyped(json, false);
}

export function MRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'index': json['index'],
        'value': json['value'],
    };
}

export function MRequestToJSON(value?: MRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'index': value.index,
        'value': value.value,
    };
}

