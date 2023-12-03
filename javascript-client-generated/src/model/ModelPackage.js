/*
 * ECE 461 - Fall 2023 - Project Phase 2
 * API for ECE 461/Fall 2023/Project Phase 2: A Trustworthy Module Registry\"  All endpoints have BASELINE or NON-BASELINE listed. Please read through all descriptions before raising questions.   A package ID is unique identifier for Package and Version. (Key idea -> id is unique for all pacakges).  Eg.       PacakgeName: Alpha, PackageVersion: 1.1.1 -> PackageID: 988645763         PacakgeName: Alpha, PackageVersion: 1.3.2 -> PackageID: 357898765
 *
 * OpenAPI spec version: 2.4.1
 * Contact: davisjam@purdue.edu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.50
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {PackageData} from './PackageData';
import {PackageMetadata} from './PackageMetadata';

/**
 * The ModelPackage model module.
 * @module model/ModelPackage
 * @version 2.4.1
 */
export class ModelPackage {
  /**
   * Constructs a new <code>ModelPackage</code>.
   * @alias module:model/ModelPackage
   * @class
   * @param metadata {module:model/PackageMetadata} 
   * @param data {module:model/PackageData} 
   */
  constructor(metadata, data) {
    this.metadata = metadata;
    this.data = data;
  }

  /**
   * Constructs a <code>ModelPackage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelPackage} obj Optional instance to populate.
   * @return {module:model/ModelPackage} The populated <code>ModelPackage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModelPackage();
      if (data.hasOwnProperty('metadata'))
        obj.metadata = PackageMetadata.constructFromObject(data['metadata']);
      if (data.hasOwnProperty('data'))
        obj.data = PackageData.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/PackageMetadata} metadata
 */
ModelPackage.prototype.metadata = undefined;

/**
 * @member {module:model/PackageData} data
 */
ModelPackage.prototype.data = undefined;

