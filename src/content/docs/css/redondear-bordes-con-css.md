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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UDDN2GV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFzHzEa5KNrnRABY3eZVISP%2F3oLWhMemwzpAlrq3U5g5AiEAwNOghlpYYjN4%2BSDY7FAAc8ouQg%2BPDqVLPwoK1196eN8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFEBp1ZY1YGla6Q6sircAzjvIFAA16tiynAyyqn194xjPoilcfCsG0ncWVfluwsZTBTV5asMGKCbHGsl1QIq1ww6Farn7SLN2%2FlNfqqfckVgXOFWLsn%2FzUnlhLEK%2BJxGWQqG%2BWjQotChvydva7J%2BZUAr8x%2F%2FG3E1qdRDrqQkp3YSDoRTpaCD78Vebo9qNbz4Ho8mEY9xYc9JhQ4kFHqR8OqLthLAaKnzTr%2BH2kJH0opmBlnZfgIk8deiPXabpYCsVqgDHtJQYlc4WITy48RIFQq5DBLOUIDNDADbrAHMuPdzfYCdxrTEH%2FA3ZSylKF6WCKcTxBrJPJdPXS58DPB4tJpKkdj0bc%2BNuei3DKJ1KTYDoFsARzDjKhFWvnTGzu8p4fB1zxGXdtl8EPiQw6vhQ3Ll%2Bxo%2Fjo0JG9oUAfIlpQp5DxlFBbxr8sq6WiM34v9EZvTfbglYsDKZ5WGAjWG%2Fn4E8%2F1QqUJspQzCOCilX4dDgOCUTjUsDMazuq3ZuXr9j9Kl8CKupp4Cn%2FsP8bP0Lfh4z%2BSb%2B%2FeZKs9T4EDaXpV6KmnXJVgyVGZnt%2F%2F%2BhGIh3tz3hR2RivMmC0J%2BpjONUjCPvc2xXqeuKLnSZokqCKKDx%2F%2BtKo5qVNn0qblokDbNcVroB%2FNYaSTAeDObhMPnJxMkGOqUBwUrIoXFUNbHLegCAf8K0SL7MJninKs5%2F0eXw2WgmpC8ibMcpHePLd78p7oGOte1yq1xa0W9IC8ggpfGpuVO%2FuUPja8a9rZlE1D%2FarX15cCMbdNvPjdd%2BjaLmA6L0Pv8GHAOd9viO1sco6VnFqSniXS8BUgpNOLwFB0T3oy1%2Fz8Rhl8OYr2Iln%2F3XAN4o2g%2FRgixZrgSRjSp6a227v1qz6vtWeQWh&X-Amz-Signature=8c3a444255254c7beab93e02afa333406a47ade73d22ea78d313ef60cb8c2e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UDDN2GV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFzHzEa5KNrnRABY3eZVISP%2F3oLWhMemwzpAlrq3U5g5AiEAwNOghlpYYjN4%2BSDY7FAAc8ouQg%2BPDqVLPwoK1196eN8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFEBp1ZY1YGla6Q6sircAzjvIFAA16tiynAyyqn194xjPoilcfCsG0ncWVfluwsZTBTV5asMGKCbHGsl1QIq1ww6Farn7SLN2%2FlNfqqfckVgXOFWLsn%2FzUnlhLEK%2BJxGWQqG%2BWjQotChvydva7J%2BZUAr8x%2F%2FG3E1qdRDrqQkp3YSDoRTpaCD78Vebo9qNbz4Ho8mEY9xYc9JhQ4kFHqR8OqLthLAaKnzTr%2BH2kJH0opmBlnZfgIk8deiPXabpYCsVqgDHtJQYlc4WITy48RIFQq5DBLOUIDNDADbrAHMuPdzfYCdxrTEH%2FA3ZSylKF6WCKcTxBrJPJdPXS58DPB4tJpKkdj0bc%2BNuei3DKJ1KTYDoFsARzDjKhFWvnTGzu8p4fB1zxGXdtl8EPiQw6vhQ3Ll%2Bxo%2Fjo0JG9oUAfIlpQp5DxlFBbxr8sq6WiM34v9EZvTfbglYsDKZ5WGAjWG%2Fn4E8%2F1QqUJspQzCOCilX4dDgOCUTjUsDMazuq3ZuXr9j9Kl8CKupp4Cn%2FsP8bP0Lfh4z%2BSb%2B%2FeZKs9T4EDaXpV6KmnXJVgyVGZnt%2F%2F%2BhGIh3tz3hR2RivMmC0J%2BpjONUjCPvc2xXqeuKLnSZokqCKKDx%2F%2BtKo5qVNn0qblokDbNcVroB%2FNYaSTAeDObhMPnJxMkGOqUBwUrIoXFUNbHLegCAf8K0SL7MJninKs5%2F0eXw2WgmpC8ibMcpHePLd78p7oGOte1yq1xa0W9IC8ggpfGpuVO%2FuUPja8a9rZlE1D%2FarX15cCMbdNvPjdd%2BjaLmA6L0Pv8GHAOd9viO1sco6VnFqSniXS8BUgpNOLwFB0T3oy1%2Fz8Rhl8OYr2Iln%2F3XAN4o2g%2FRgixZrgSRjSp6a227v1qz6vtWeQWh&X-Amz-Signature=284c1268b6fe482cea65826942f873ee64e0d73236d0b4cbc69fb21f6410b17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
