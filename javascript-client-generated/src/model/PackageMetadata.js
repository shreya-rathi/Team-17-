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
import {PackageID} from './PackageID';
import {PackageName} from './PackageName';

/**
 * The PackageMetadata model module.
 * @module model/PackageMetadata
 * @version 2.4.1
 */
export class PackageMetadata {
  /**
   * Constructs a new <code>PackageMetadata</code>.
   * The \&quot;Name\&quot; and \&quot;Version\&quot; are used as a unique identifier pair when uploading a package.  The \&quot;ID\&quot; is used as an internal identifier for interacting with existing packages.
   * @alias module:model/PackageMetadata
   * @class
   * @param name {module:model/PackageName} 
   * @param version {String} Package version
   * @param ID {module:model/PackageID} 
   */
  constructor(name, version, ID) {
    this.name = name;
    this.version = version;
    this.ID = ID;
  }

  /**
   * Constructs a <code>PackageMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PackageMetadata} obj Optional instance to populate.
   * @return {module:model/PackageMetadata} The populated <code>PackageMetadata</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PackageMetadata();
      if (data.hasOwnProperty('Name'))
        obj.name = PackageName.constructFromObject(data['Name']);
      if (data.hasOwnProperty('Version'))
        obj.version = ApiClient.convertToType(data['Version'], 'String');
      if (data.hasOwnProperty('ID'))
        obj.ID = PackageID.constructFromObject(data['ID']);
    }
    return obj;
  }
}

/**
 * @member {module:model/PackageName} name
 */
PackageMetadata.prototype.name = undefined;

/**
 * Package version
 * @member {String} version
 */
PackageMetadata.prototype.version = undefined;

/**
 * @member {module:model/PackageID} ID
 */
PackageMetadata.prototype.ID = undefined;

