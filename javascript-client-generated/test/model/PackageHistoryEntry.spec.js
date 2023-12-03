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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Ece461Fall2023ProjectPhase2);
  }
}(this, function(expect, Ece461Fall2023ProjectPhase2) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('PackageHistoryEntry', function() {
      beforeEach(function() {
        instance = new Ece461Fall2023ProjectPhase2.PackageHistoryEntry();
      });

      it('should create an instance of PackageHistoryEntry', function() {
        // TODO: update the code to test PackageHistoryEntry
        expect(instance).to.be.a(Ece461Fall2023ProjectPhase2.PackageHistoryEntry);
      });

      it('should have the property user (base name: "User")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

      it('should have the property _date (base name: "Date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property packageMetadata (base name: "PackageMetadata")', function() {
        // TODO: update the code to test the property packageMetadata
        expect(instance).to.have.property('packageMetadata');
        // expect(instance.packageMetadata).to.be(expectedValueLiteral);
      });

      it('should have the property action (base name: "Action")', function() {
        // TODO: update the code to test the property action
        expect(instance).to.have.property('action');
        // expect(instance.action).to.be(expectedValueLiteral);
      });

    });
  });

}));
