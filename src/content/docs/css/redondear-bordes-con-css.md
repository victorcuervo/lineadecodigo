---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVQTRFC5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFJ4f6FWxwVjzCzxO9RieUVlEKS%2FAdbZsmopAzZkuV%2FbAiEAofsYfV97A94W900rqyhJiHCFIKsi2jMeHKGsnrw95eAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDGOgzv9GgiDcw3YARSrcA7hvj%2BYteLfQ7EOg7uNfNwJr2n55hOCbahZ1jvsg8hJzHZrS%2F1R7b6bWiQ%2FwaRwKBADivWNOYCCvFqLKFFfVx2zVulPSqTi%2Fs%2F4IMjA4WdQJJU%2B4txdHVn8fphqhnZc0LxkBZrciNuVvLK1mFNEamHC52%2BWMHYsAneBsQ9QfT3tJb7VydzsI3WaTt2zqNr6xVfINaZWFqxvbPOGWQMVKXEpQkA4UVH%2FWL3z5Ps%2Fk0cH9CoZ40zjyFAvgJ37UVViJC1f0goiuFZCfK6G3WfktJ0shNd7WaEz0odB7k2P3djUTL57jkrMd7nPxvRc4B9GXToVc6fc%2FDHfejYdovTKf6AhoMrRrMDGO0%2B%2B8lgQcwZlPPW0U4oTXbn%2FqXCUJoBjj9bqKZteyYIxwDGi4zddvsN6H%2B359xwaMlVzBVRBJ1SWldqzOhFsOLVydjQBGry%2BfPcpazHRnrpXHDMlxXX8hgKDhZ70DDIQXO%2Bk2EwDKOe4haGtYeVInt66FEFTLB4IHew5lIP%2FvNoK%2BXy26mIb%2BXxvbcc8rxmVijJCDOeoDr2%2FPBGmub3vSe%2BYynwmz047LjN23YQxOf6%2BGMEqvVy542iShOF%2B7IgFv5aiBm5PT3a0UUbIShgth3NULyBoiMPCQxMkGOqUB0gfgUlbeSPudR83sSZ2BzDNxkk0kX0KeTloXdN3GEU88kVoQaxTmwCc%2FxjmxYqOGvkhOzppB2FpaxYhzecI%2B%2FUVm1IICq53QnpcJQ2DfXMyLn2Ozp5%2F%2F%2BBiqY0%2FHEljHZUz4ks%2BDozAglhd3GZ2PDxPpRpGWH5i2Wo2Em5MRLLRelVVPjeAhsyM5OEDZ3Mgm614wsz%2FrHI%2BjAGjS8Z%2FSV1rUtWqE&X-Amz-Signature=8b4ca490664c57d1b14dabe24e50283b59cb8cd7ab965a96248ff787598edd78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVQTRFC5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFJ4f6FWxwVjzCzxO9RieUVlEKS%2FAdbZsmopAzZkuV%2FbAiEAofsYfV97A94W900rqyhJiHCFIKsi2jMeHKGsnrw95eAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDGOgzv9GgiDcw3YARSrcA7hvj%2BYteLfQ7EOg7uNfNwJr2n55hOCbahZ1jvsg8hJzHZrS%2F1R7b6bWiQ%2FwaRwKBADivWNOYCCvFqLKFFfVx2zVulPSqTi%2Fs%2F4IMjA4WdQJJU%2B4txdHVn8fphqhnZc0LxkBZrciNuVvLK1mFNEamHC52%2BWMHYsAneBsQ9QfT3tJb7VydzsI3WaTt2zqNr6xVfINaZWFqxvbPOGWQMVKXEpQkA4UVH%2FWL3z5Ps%2Fk0cH9CoZ40zjyFAvgJ37UVViJC1f0goiuFZCfK6G3WfktJ0shNd7WaEz0odB7k2P3djUTL57jkrMd7nPxvRc4B9GXToVc6fc%2FDHfejYdovTKf6AhoMrRrMDGO0%2B%2B8lgQcwZlPPW0U4oTXbn%2FqXCUJoBjj9bqKZteyYIxwDGi4zddvsN6H%2B359xwaMlVzBVRBJ1SWldqzOhFsOLVydjQBGry%2BfPcpazHRnrpXHDMlxXX8hgKDhZ70DDIQXO%2Bk2EwDKOe4haGtYeVInt66FEFTLB4IHew5lIP%2FvNoK%2BXy26mIb%2BXxvbcc8rxmVijJCDOeoDr2%2FPBGmub3vSe%2BYynwmz047LjN23YQxOf6%2BGMEqvVy542iShOF%2B7IgFv5aiBm5PT3a0UUbIShgth3NULyBoiMPCQxMkGOqUB0gfgUlbeSPudR83sSZ2BzDNxkk0kX0KeTloXdN3GEU88kVoQaxTmwCc%2FxjmxYqOGvkhOzppB2FpaxYhzecI%2B%2FUVm1IICq53QnpcJQ2DfXMyLn2Ozp5%2F%2F%2BBiqY0%2FHEljHZUz4ks%2BDozAglhd3GZ2PDxPpRpGWH5i2Wo2Em5MRLLRelVVPjeAhsyM5OEDZ3Mgm614wsz%2FrHI%2BjAGjS8Z%2FSV1rUtWqE&X-Amz-Signature=f71586fb1ab3c8c4399a84b19eccfd5115576a19fc54a80feee994b4db427be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
