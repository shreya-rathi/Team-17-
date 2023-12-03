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
import {ApiClient} from "../ApiClient";
import {AuthenticationRequest} from '../model/AuthenticationRequest';
import {AuthenticationToken} from '../model/AuthenticationToken';
import {EnumerateOffset} from '../model/EnumerateOffset';
import {ModelPackage} from '../model/ModelPackage';
import {PackageData} from '../model/PackageData';
import {PackageHistoryEntry} from '../model/PackageHistoryEntry';
import {PackageID} from '../model/PackageID';
import {PackageMetadata} from '../model/PackageMetadata';
import {PackageName} from '../model/PackageName';
import {PackageQuery} from '../model/PackageQuery';
import {PackageRating} from '../model/PackageRating';
import {PackageRegEx} from '../model/PackageRegEx';

/**
* Default service.
* @module api/DefaultApi
* @version 2.4.1
*/
export class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createAuthToken operation.
     * @callback moduleapi/DefaultApi~createAuthTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthenticationToken{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * (NON-BASELINE)
     * Create an access token.
     * @param {module:model/AuthenticationRequest} body 
     * @param {module:api/DefaultApi~createAuthTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createAuthToken(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createAuthToken");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthenticationToken;

      return this.apiClient.callApi(
        '/authenticate', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the packageByNameDelete operation.
     * @callback moduleapi/DefaultApi~packageByNameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete all versions of this package. (NON-BASELINE)
     * @param {module:model/AuthenticationToken} xAuthorization 
     * @param {module:model/PackageName} name 
     * @param {module:api/DefaultApi~packageByNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    packageByNameDelete(xAuthorization, name, callback) {
      
      let postBody = null;
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling packageByNameDelete");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling packageByNameDelete");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Authorization': xAuthorization
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/package/byName/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the packageByNameGet operation.
     * @callback moduleapi/DefaultApi~packageByNameGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PackageHistoryEntry>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * (NON-BASELINE)
     * Return the history of this package (all versions).
     * @param {module:model/PackageName} name 
     * @param {module:model/AuthenticationToken} xAuthorization 
     * @param {module:api/DefaultApi~packageByNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    packageByNameGet(name, xAuthorization, callback) {
      
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling packageByNameGet");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling packageByNameGet");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Authorization': xAuthorization
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PackageHistoryEntry];

      return this.apiClient.callApi(
        '/package/byName/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the packageByRegExGet operation.
     * @callback moduleapi/DefaultApi~packageByRegExGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PackageMetadata>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get any packages fitting the regular expression (BASELINE).
     * Search for a package using regular expression over package names and READMEs. This is similar to search by name.
     * @param {module:model/PackageRegEx} body 
     * @param {module:model/AuthenticationToken} xAuthorization 
     * @param {module:api/DefaultApi~packageByRegExGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    packageByRegExGet(body, xAuthorization, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling packageByRegExGet");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling packageByRegExGet");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Authorization': xAuthorization
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [PackageMetadata];

      return this.apiClient.callApi(
        '/package/byRegEx', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the packageCreate operation.
     * @callback moduleapi/DefaultApi~packageCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelPackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload or Ingest a new package. (BASELINE)
     * Upload or Ingest a new package. Packages that are uploaded may have the same name but a new version. Refer to the description above to see how an id is formed for a pacakge. 
     * @param {module:model/PackageData} body 
     * @param {module:model/AuthenticationToken} xAuthorization 
     * @param {module:api/DefaultApi~packageCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    packageCreate(body, xAuthorization, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling packageCreate");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling packageCreate");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Authorization': xAuthorization
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelPackage;

      return this.apiClient.callApi(
        '/package', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the packageDelete operation.
     * @callback moduleapi/DefaultApi~packageDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete this version of the package. (NON-BASELINE)
     * Delete only the package that matches \&quot;id\&quot;. (id is a unique identifier for a packge)
     * @param {module:model/AuthenticationToken} xAuthorization 
     * @param {module:model/PackageID} id Package ID
     * @param {module:api/DefaultApi~packageDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    packageDelete(xAuthorization, id, callback) {
      
      let postBody = null;
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling packageDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling packageDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Authorization': xAuthorization
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/package/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the packageRate operation.
     * @callback moduleapi/DefaultApi~packageRateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PackageRating{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get ratings for this package. (BASELINE)
     * @param {module:model/PackageID} id 
     * @param {module:model/AuthenticationToken} xAuthorization 
     * @param {module:api/DefaultApi~packageRateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    packageRate(id, xAuthorization, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling packageRate");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling packageRate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Authorization': xAuthorization
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PackageRating;

      return this.apiClient.callApi(
        '/package/{id}/rate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the packageRetrieve operation.
     * @callback moduleapi/DefaultApi~packageRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelPackage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Interact with the package with this ID. (BASELINE)
     * Return this package.
     * @param {module:model/AuthenticationToken} xAuthorization 
     * @param {module:model/PackageID} id ID of package to fetch
     * @param {module:api/DefaultApi~packageRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    packageRetrieve(xAuthorization, id, callback) {
      
      let postBody = null;
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling packageRetrieve");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling packageRetrieve");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Authorization': xAuthorization
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelPackage;

      return this.apiClient.callApi(
        '/package/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the packageUpdate operation.
     * @callback moduleapi/DefaultApi~packageUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update this content of the package. (BASELINE)
     * The name, version, and ID must match.  The package contents (from PackageData) will replace the previous contents.
     * @param {module:model/ModelPackage} body 
     * @param {module:model/AuthenticationToken} xAuthorization 
     * @param {module:model/PackageID} id 
     * @param {module:api/DefaultApi~packageUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    packageUpdate(body, xAuthorization, id, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling packageUpdate");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling packageUpdate");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling packageUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Authorization': xAuthorization
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/package/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the packagesList operation.
     * @callback moduleapi/DefaultApi~packagesListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PackageMetadata>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the packages from the registry. (BASELINE)
     * Get any packages fitting the query. Search for packages satisfying the indicated query.  If you want to enumerate all packages, provide an array with a single PackageQuery whose name is \&quot;*\&quot;.  The response is paginated; the response header includes the offset to use in the next query.  In the Request Body below, \&quot;Version\&quot; has all the possible inputs. The \&quot;Version\&quot; cannot be a combinaiton fo the all the possibilities. 
     * @param {Array.<module:model/PackageQuery>} body 
     * @param {module:model/AuthenticationToken} xAuthorization 
     * @param {Object} opts Optional parameters
     * @param {module:model/EnumerateOffset} opts.offset Provide this for pagination. If not provided, returns the first page of results.
     * @param {module:api/DefaultApi~packagesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    packagesList(body, xAuthorization, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling packagesList");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling packagesList");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'offset': opts['offset']
      };
      let headerParams = {
        'X-Authorization': xAuthorization
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [PackageMetadata];

      return this.apiClient.callApi(
        '/packages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the registryReset operation.
     * @callback moduleapi/DefaultApi~registryResetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset the registry. (BASELINE)
     * Reset the registry to a system default state.
     * @param {module:model/AuthenticationToken} xAuthorization 
     * @param {module:api/DefaultApi~registryResetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    registryReset(xAuthorization, callback) {
      
      let postBody = null;
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling registryReset");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Authorization': xAuthorization
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/reset', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}