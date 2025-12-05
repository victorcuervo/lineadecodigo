---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YAFI4BS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCquukVIBgGN7oTTIt0x%2FqlZkH9bcVvIYPGRzR%2B89%2BpDQIgUfsw9eELtqWKWbTIAqiNlNWFP0IV1e0JbWbovIt%2Ber8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHh0I9eh%2F%2FsACDD9nSrcA5hDmlcdH%2FIiP4OlhBlGZmOiHid%2BNLS9NXkKLuALh7aG4JliFr3TVp0hVo9pE5u5wHcevgg%2FDgQso8mBb07BmeND%2BH5RBW74lovCNEKK%2FYhVlGx50IpLM%2B1A9XUi9yS%2BbxZuu2MGQWL9gIgPSnSyBKSrsON2KfJy6EyvdllaqBta%2FRLubMOdksjs94%2BJZ5lLzRIzkRcrpUt8xPh4NzA3zqbMfP5chSNp1W69svqE1YSMRV7R50lHfcbjsSMlsiOtOp4SxN5o7vr8WDg8nGKurdFe6m7JxxelTZ4rU9aaxetfcMva5PXLWjZJ9vC15QTFByWmi%2FQWeTgazmhXFj4WG2arjg5yZZUdFLN9yPZ1ruAXvCf7JG9Ey%2FO3PEtHw%2FmfLciMxwvWBY%2FL2pWN%2Bg4kc1izNKHiv6cVt8U2m6xkam254KFt3P7Lft7uTTZ5rKLBUDpTyFQsSzWBoQsTArX6eeVoiAtHf6F%2FZvlq0pZxTTGZM9gnHunZiCATRfg2FZTmyQRISrKZXxhPJXmsYEyWDwZ4pVVgiDYxlUr3bTf0j7kA0LHR32NwDcXSoLm%2Bm8Bpcmx1eAMOEcq1bRtRh%2BWgqIHJh35vX4oQEZeIMUAtSkpeSqP%2FXxvtXo%2FMTG6CMOrGyskGOqUBO0NYYziKBSWoz2v%2FVZvn%2F0cdhjwqdVvTqlfx4iEVJAYSWAdbLfIBtAmEhLfrVYPG7rwWRDNvANR5sGFOPsIj7OqtBG%2Bc6lwqsaT1yOLF5r%2FdvmwQRbYxrXTiFYKBhBFDBl3dYNHsXU8RQ0GpSnUGz1FUmDGJad2RXYwQtqiuM5O9mHvax4FpERW9GNeI37q1YUD7w6i%2B9yCBZnUcNwY20MsQtjDV&X-Amz-Signature=ac0fec9b3dd7561114725193508389c1dfdd04180886d9fb77328eeb541a3fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YAFI4BS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCquukVIBgGN7oTTIt0x%2FqlZkH9bcVvIYPGRzR%2B89%2BpDQIgUfsw9eELtqWKWbTIAqiNlNWFP0IV1e0JbWbovIt%2Ber8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHh0I9eh%2F%2FsACDD9nSrcA5hDmlcdH%2FIiP4OlhBlGZmOiHid%2BNLS9NXkKLuALh7aG4JliFr3TVp0hVo9pE5u5wHcevgg%2FDgQso8mBb07BmeND%2BH5RBW74lovCNEKK%2FYhVlGx50IpLM%2B1A9XUi9yS%2BbxZuu2MGQWL9gIgPSnSyBKSrsON2KfJy6EyvdllaqBta%2FRLubMOdksjs94%2BJZ5lLzRIzkRcrpUt8xPh4NzA3zqbMfP5chSNp1W69svqE1YSMRV7R50lHfcbjsSMlsiOtOp4SxN5o7vr8WDg8nGKurdFe6m7JxxelTZ4rU9aaxetfcMva5PXLWjZJ9vC15QTFByWmi%2FQWeTgazmhXFj4WG2arjg5yZZUdFLN9yPZ1ruAXvCf7JG9Ey%2FO3PEtHw%2FmfLciMxwvWBY%2FL2pWN%2Bg4kc1izNKHiv6cVt8U2m6xkam254KFt3P7Lft7uTTZ5rKLBUDpTyFQsSzWBoQsTArX6eeVoiAtHf6F%2FZvlq0pZxTTGZM9gnHunZiCATRfg2FZTmyQRISrKZXxhPJXmsYEyWDwZ4pVVgiDYxlUr3bTf0j7kA0LHR32NwDcXSoLm%2Bm8Bpcmx1eAMOEcq1bRtRh%2BWgqIHJh35vX4oQEZeIMUAtSkpeSqP%2FXxvtXo%2FMTG6CMOrGyskGOqUBO0NYYziKBSWoz2v%2FVZvn%2F0cdhjwqdVvTqlfx4iEVJAYSWAdbLfIBtAmEhLfrVYPG7rwWRDNvANR5sGFOPsIj7OqtBG%2Bc6lwqsaT1yOLF5r%2FdvmwQRbYxrXTiFYKBhBFDBl3dYNHsXU8RQ0GpSnUGz1FUmDGJad2RXYwQtqiuM5O9mHvax4FpERW9GNeI37q1YUD7w6i%2B9yCBZnUcNwY20MsQtjDV&X-Amz-Signature=86a5efa00209d5e0a1546ca25986d3a815119568a19e868bb2df6193c3efe73c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
