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

/**
 * The PackageRating model module.
 * @module model/PackageRating
 * @version 2.4.1
 */
export class PackageRating {
  /**
   * Constructs a new <code>PackageRating</code>.
   * Package rating (cf. Project 1).  If the Project 1 that you inherited does not support one or more of the original properties, denote this with the value \&quot;-1\&quot;.
   * @alias module:model/PackageRating
   * @class
   * @param busFactor {Number} 
   * @param correctness {Number} 
   * @param rampUp {Number} 
   * @param responsiveMaintainer {Number} 
   * @param licenseScore {Number} 
   * @param goodPinningPractice {Number} The fraction of its dependencies that are pinned to at least a specific major+minor version, e.g. version 2.3.X of a package. (If there are zero dependencies, they should receive a 1.0 rating. If there are two dependencies, one pinned to this degree, then they should receive a Â½ = 0.5 rating).
   * @param pullRequest {Number} The fraction of project code that was introduced through pull requests with a code review.
   * @param netScore {Number} Scores calculated from other seven metrics.
   */
  constructor(busFactor, correctness, rampUp, responsiveMaintainer, licenseScore, goodPinningPractice, pullRequest, netScore) {
    this.busFactor = busFactor;
    this.correctness = correctness;
    this.rampUp = rampUp;
    this.responsiveMaintainer = responsiveMaintainer;
    this.licenseScore = licenseScore;
    this.goodPinningPractice = goodPinningPractice;
    this.pullRequest = pullRequest;
    this.netScore = netScore;
  }

  /**
   * Constructs a <code>PackageRating</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PackageRating} obj Optional instance to populate.
   * @return {module:model/PackageRating} The populated <code>PackageRating</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PackageRating();
      if (data.hasOwnProperty('BusFactor'))
        obj.busFactor = ApiClient.convertToType(data['BusFactor'], 'Number');
      if (data.hasOwnProperty('Correctness'))
        obj.correctness = ApiClient.convertToType(data['Correctness'], 'Number');
      if (data.hasOwnProperty('RampUp'))
        obj.rampUp = ApiClient.convertToType(data['RampUp'], 'Number');
      if (data.hasOwnProperty('ResponsiveMaintainer'))
        obj.responsiveMaintainer = ApiClient.convertToType(data['ResponsiveMaintainer'], 'Number');
      if (data.hasOwnProperty('LicenseScore'))
        obj.licenseScore = ApiClient.convertToType(data['LicenseScore'], 'Number');
      if (data.hasOwnProperty('GoodPinningPractice'))
        obj.goodPinningPractice = ApiClient.convertToType(data['GoodPinningPractice'], 'Number');
      if (data.hasOwnProperty('PullRequest'))
        obj.pullRequest = ApiClient.convertToType(data['PullRequest'], 'Number');
      if (data.hasOwnProperty('NetScore'))
        obj.netScore = ApiClient.convertToType(data['NetScore'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} busFactor
 */
PackageRating.prototype.busFactor = undefined;

/**
 * @member {Number} correctness
 */
PackageRating.prototype.correctness = undefined;

/**
 * @member {Number} rampUp
 */
PackageRating.prototype.rampUp = undefined;

/**
 * @member {Number} responsiveMaintainer
 */
PackageRating.prototype.responsiveMaintainer = undefined;

/**
 * @member {Number} licenseScore
 */
PackageRating.prototype.licenseScore = undefined;

/**
 * The fraction of its dependencies that are pinned to at least a specific major+minor version, e.g. version 2.3.X of a package. (If there are zero dependencies, they should receive a 1.0 rating. If there are two dependencies, one pinned to this degree, then they should receive a Â½ = 0.5 rating).
 * @member {Number} goodPinningPractice
 */
PackageRating.prototype.goodPinningPractice = undefined;

/**
 * The fraction of project code that was introduced through pull requests with a code review.
 * @member {Number} pullRequest
 */
PackageRating.prototype.pullRequest = undefined;

/**
 * Scores calculated from other seven metrics.
 * @member {Number} netScore
 */
PackageRating.prototype.netScore = undefined;

