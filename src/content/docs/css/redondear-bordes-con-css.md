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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L572UEL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzlvme%2Fp3xt1tk7mmJxZoOq%2BVDkVimecaRTvrlqwnr%2FAiEA1MGgWpHoHs5xMCmtfIRTEnO0llJPEeuASWEqL3qOxokq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDB3ZMHHpBEnSrMRyySrcA7ZkUHC94MzPFfjH%2FnqKn8IClI1TgTzxUo1F1vES7sVX7RsDucKmbM7WMMRvmNxU5P%2FvhKp2L%2FXiKkTiMTZ3H6Q3yu6zfDvi%2FziV9dTgGEM9ConfWfnrbFi6bL%2FlqSOv6TOGfQLoPUmtCmfvL%2BWQa%2BytTGgP1UfQb%2FJsPDASxWsyDxoeuJF7eGKTBQ4nnjlg%2BqgpCsl37nokWx1TcNnr8mA4%2FxultW1e2NmCT8HzYIQcn0xTuruGOKVVGVC3K9iSvpLObDTl1gzm2s3Dm030n9k7RxjwqzXJAMhJNYMi5UzUJrU2%2FYAEqc8AuRxmvonrPHdFmXVnKRLlZ60yBoYYTe%2BdY6zotr%2FOVkMdvip0kyN35bjgTkm8cLAlzEvgqc%2BWioJzUr6%2Bam%2B5nHmmVmLgGL9lIqqhZSgr2Degoh%2FzqztT%2BiykembSxvjjjv6tlzJdNIE3U76CpH6yRW6qP3ka866VAk6lUZcmLVGBbwQR41mV8V4qI0m8WfbieAUWad0hF9p2ztBELs6n4BA5%2BETS41b642PF0I6oiqBy3f2hIBiunAyZ3RZk4zIBiOuSEUmSnUstxantgpqyaoALtfdg55akugPCGNIDFAAgfnYpo4j25uDsl8ZOgIdZFNj9MK%2FQyskGOqUB%2FCix2J3ddp7zemcJLevkUaJHr%2BZBtCF5T%2FzkFx8ba5Ucs7sRvlJLqstuzkMP0CiVt0Z8PX%2ByWLpDwB9VVMAUJSmFCapyEmXfhE5z6ITRUfll3jYSYIlsNFTmfIl%2BYZRyFcmxLnwuxf0SVYiH0Y%2FsovCGVLvtc0%2FHvMQNNbGUZqlsSD3xjww0KcE96iWurOD2uPmMAyNgWuzdCimkCCTigsRgoadL&X-Amz-Signature=29e5a89971d868818066636e9ddc9540fa68015da3db35b4f5e175e6320774bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L572UEL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzlvme%2Fp3xt1tk7mmJxZoOq%2BVDkVimecaRTvrlqwnr%2FAiEA1MGgWpHoHs5xMCmtfIRTEnO0llJPEeuASWEqL3qOxokq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDB3ZMHHpBEnSrMRyySrcA7ZkUHC94MzPFfjH%2FnqKn8IClI1TgTzxUo1F1vES7sVX7RsDucKmbM7WMMRvmNxU5P%2FvhKp2L%2FXiKkTiMTZ3H6Q3yu6zfDvi%2FziV9dTgGEM9ConfWfnrbFi6bL%2FlqSOv6TOGfQLoPUmtCmfvL%2BWQa%2BytTGgP1UfQb%2FJsPDASxWsyDxoeuJF7eGKTBQ4nnjlg%2BqgpCsl37nokWx1TcNnr8mA4%2FxultW1e2NmCT8HzYIQcn0xTuruGOKVVGVC3K9iSvpLObDTl1gzm2s3Dm030n9k7RxjwqzXJAMhJNYMi5UzUJrU2%2FYAEqc8AuRxmvonrPHdFmXVnKRLlZ60yBoYYTe%2BdY6zotr%2FOVkMdvip0kyN35bjgTkm8cLAlzEvgqc%2BWioJzUr6%2Bam%2B5nHmmVmLgGL9lIqqhZSgr2Degoh%2FzqztT%2BiykembSxvjjjv6tlzJdNIE3U76CpH6yRW6qP3ka866VAk6lUZcmLVGBbwQR41mV8V4qI0m8WfbieAUWad0hF9p2ztBELs6n4BA5%2BETS41b642PF0I6oiqBy3f2hIBiunAyZ3RZk4zIBiOuSEUmSnUstxantgpqyaoALtfdg55akugPCGNIDFAAgfnYpo4j25uDsl8ZOgIdZFNj9MK%2FQyskGOqUB%2FCix2J3ddp7zemcJLevkUaJHr%2BZBtCF5T%2FzkFx8ba5Ucs7sRvlJLqstuzkMP0CiVt0Z8PX%2ByWLpDwB9VVMAUJSmFCapyEmXfhE5z6ITRUfll3jYSYIlsNFTmfIl%2BYZRyFcmxLnwuxf0SVYiH0Y%2FsovCGVLvtc0%2FHvMQNNbGUZqlsSD3xjww0KcE96iWurOD2uPmMAyNgWuzdCimkCCTigsRgoadL&X-Amz-Signature=604fd6b1f4954346871b020ffe609ebaa439df1eceb4c1045511290d414328d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
