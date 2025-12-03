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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA3ENI53%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDMRZu24MxUs2OABjgNXWLYR3k2KO4DH%2B53iPoZNTSmdQIhALBE3%2FC2iq0wPEcPBrB4k1AnN85%2BZM%2FUsr2n12kT3PrlKv8DCDgQABoMNjM3NDIzMTgzODA1Igy%2Bv0wbSzcEYUwBNJsq3AM6pOS%2Bv8t1Pf2bdKHpPbIzGF4HpuJRC7kttyx7lUf5yvsMekak5qGH7%2BhWC9br6%2BmIrqiaaPfmAkj1%2FplasLbiWHLul4fMYUDdS5Ar2Uzi0G4eavWNYEuxD%2BdcPhSQ%2FjGP1WJvswl7MKqQIuTCmt5oCIU4H1Pc%2FNEf8GXCksJ2BhJh1%2BQjlh%2FE9doXigMIk3f8A%2BdfKumqV8ELm9%2Bsyu1Y3vuprkQRUZytRuIcDXUe%2BSmm%2BBb%2FP%2BHIa4ZmlkOdVR7I3oMuRg6PtLSdVV6GmsQaJwJPROOyyKYZyonMhfxs2buBi15efh8O1GxUo%2BuibDLtEGpH2jvKsc9vOGAt7jBRs%2BJwCUAUl0EldzI%2F2%2FTbimHB3qY4fLouDXuU5SjlVm%2By3wJfCmZ6Qs0EJPW5fana4RMavQNEeZD%2BN3aEMucXzNnRmnp4IrSqnpdGG7JuhLuVXjesRoVynjLJo5ZXEKula%2BMdI5uo2h01kn73%2F1OiqdqFKj4vCcFbixkC%2Fu4gI1Ee3xId9GTSYVqiP%2BVgBaM1lBcx39zzGCyvTmbwXDhodKN%2FYo5hSDSu2DyxVfJiRLsG9xARnDytZt9mSVXx%2FUB8pZDYxhARr4jY0rxJt72jTQ9vmwe7PP%2FwiuydozDH98LJBjqkAUp2%2BIsIpnY6a7gIbiOQe3r3hQya5a%2BuNs69CX6AoP6oUyIMnoi%2BbxzRTrdba%2BGZ7OFFTHXLu9EuoWw7wnsjkHw2AkGDrFNBFacdInxj6fdA3imeG1S3QTZA7LTZjHDbH79yptLvs58xNbO3w0I5WGNe3DxKDnbyrdEFGR%2BYMxTQA0KhH0m38E9mkr7qiW69jjNwJodOTawpid2g0nO2f0KovmA1&X-Amz-Signature=c484bcb28dbc1be09cea687db129783cbd5d54567f9bb576761073d7d82307c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA3ENI53%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDMRZu24MxUs2OABjgNXWLYR3k2KO4DH%2B53iPoZNTSmdQIhALBE3%2FC2iq0wPEcPBrB4k1AnN85%2BZM%2FUsr2n12kT3PrlKv8DCDgQABoMNjM3NDIzMTgzODA1Igy%2Bv0wbSzcEYUwBNJsq3AM6pOS%2Bv8t1Pf2bdKHpPbIzGF4HpuJRC7kttyx7lUf5yvsMekak5qGH7%2BhWC9br6%2BmIrqiaaPfmAkj1%2FplasLbiWHLul4fMYUDdS5Ar2Uzi0G4eavWNYEuxD%2BdcPhSQ%2FjGP1WJvswl7MKqQIuTCmt5oCIU4H1Pc%2FNEf8GXCksJ2BhJh1%2BQjlh%2FE9doXigMIk3f8A%2BdfKumqV8ELm9%2Bsyu1Y3vuprkQRUZytRuIcDXUe%2BSmm%2BBb%2FP%2BHIa4ZmlkOdVR7I3oMuRg6PtLSdVV6GmsQaJwJPROOyyKYZyonMhfxs2buBi15efh8O1GxUo%2BuibDLtEGpH2jvKsc9vOGAt7jBRs%2BJwCUAUl0EldzI%2F2%2FTbimHB3qY4fLouDXuU5SjlVm%2By3wJfCmZ6Qs0EJPW5fana4RMavQNEeZD%2BN3aEMucXzNnRmnp4IrSqnpdGG7JuhLuVXjesRoVynjLJo5ZXEKula%2BMdI5uo2h01kn73%2F1OiqdqFKj4vCcFbixkC%2Fu4gI1Ee3xId9GTSYVqiP%2BVgBaM1lBcx39zzGCyvTmbwXDhodKN%2FYo5hSDSu2DyxVfJiRLsG9xARnDytZt9mSVXx%2FUB8pZDYxhARr4jY0rxJt72jTQ9vmwe7PP%2FwiuydozDH98LJBjqkAUp2%2BIsIpnY6a7gIbiOQe3r3hQya5a%2BuNs69CX6AoP6oUyIMnoi%2BbxzRTrdba%2BGZ7OFFTHXLu9EuoWw7wnsjkHw2AkGDrFNBFacdInxj6fdA3imeG1S3QTZA7LTZjHDbH79yptLvs58xNbO3w0I5WGNe3DxKDnbyrdEFGR%2BYMxTQA0KhH0m38E9mkr7qiW69jjNwJodOTawpid2g0nO2f0KovmA1&X-Amz-Signature=29ee7433aecbe5638a426e6aba5e470bb0d85ada4f8a7c1996a2538699616b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
