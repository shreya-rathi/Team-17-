# Ece461Fall2023ProjectPhase2.PackageRating

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**busFactor** | **Number** |  | 
**correctness** | **Number** |  | 
**rampUp** | **Number** |  | 
**responsiveMaintainer** | **Number** |  | 
**licenseScore** | **Number** |  | 
**goodPinningPractice** | **Number** | The fraction of its dependencies that are pinned to at least a specific major+minor version, e.g. version 2.3.X of a package. (If there are zero dependencies, they should receive a 1.0 rating. If there are two dependencies, one pinned to this degree, then they should receive a Â½ &#x3D; 0.5 rating). | 
**pullRequest** | **Number** | The fraction of project code that was introduced through pull requests with a code review. | 
**netScore** | **Number** | Scores calculated from other seven metrics. | 
