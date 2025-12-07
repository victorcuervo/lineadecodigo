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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KLAFLC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQdoR1fy3an0HEzzsoIqUiArrf9DZtl15XlOaeNRlknQIhAMaYeVqT3cC%2BY1Tna9hp3x1y0Q6aZ6ITjfgl1AtaCTUXKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz%2FHYDK6scTF9%2FqeAq3APcTq12AYcWQ3zsZa1eiTpcevLYWtUxs1pVftJY%2BmjTFDH9mpH9EOsmOVXTAnPHykbJK9%2FaG7nHZvqjHAqqJv7S%2FeZ8xLPfBS1uocqe67aaggUac%2BNZf%2B2QFxhd%2FO75auQme%2BnjwGq83k1Rdl4rsTwTCCodRw%2FkJLhCy5Gf9qX6D2OgnLJJcDV5SBE1edQ3UOFTNNzBtxnRTAeEB3b414xgttjiYFVCQuU%2BiQdoTzgAUOiepXwiWyUVqoOWvSXPlrgABPGf1cEPbxnnDmsPNMsJ2%2FPNgL1FyBDk6Uw0cP%2F%2BnmyJ0hldBIiQtU3utW5NCu89oBJW4j25uYD7p%2Fx5%2BVJdNO3WSzed2RnUcLxTqw0uUejHp6ECF9tgBFJ5jyrA8oupwyjMFVF2KfqRiA2HqeD%2BdXz3Rj9ud2WpBhc5MXRhQNV3DbW5IA3ODNlLbVJpnsf6rBgCbd%2FmzMjXpUxO5nXYB8WtbxhEi6uCATBSdjtXmoS71LU2sL1zq7%2BwSbd6iOH60KSHV9HpG2Iht1kmgV%2F4HtFaERXd3VJ1gc57xJK%2B6bO9x6eJaNwZvMmLRVmMoEhvhrpv7HTrYiA0mZir0HFcPz%2F2MvduHq5M%2BRlDU7fPZZOGiCsPkA3k1%2FvW9DC7odTJBjqkAcqskoJBj9ISPEWyW%2FsGQSEnVeYSUV96VUmk40PllFZXdW%2BBEfOwGMG5k6CvqVTJ2tZgt6YO%2F%2Bw4jAdww2VHPXr0u%2Bmf2gJIBK6wtJE4JcZHN2MdhzP%2FL3DKn9FlPOID00scS4coxSiN1gYGagWA7uTXmXnDfdpjCuawPxSge%2BTl0YWVoozPotfh%2FFiFAUcKPjFEeQXTMLrogJhq%2FSUi%2FwEGBkoS&X-Amz-Signature=68fc8338eef4841d47e19a8305b4b8d64f574619547e06477950d8b98edc254e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KLAFLC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQdoR1fy3an0HEzzsoIqUiArrf9DZtl15XlOaeNRlknQIhAMaYeVqT3cC%2BY1Tna9hp3x1y0Q6aZ6ITjfgl1AtaCTUXKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz%2FHYDK6scTF9%2FqeAq3APcTq12AYcWQ3zsZa1eiTpcevLYWtUxs1pVftJY%2BmjTFDH9mpH9EOsmOVXTAnPHykbJK9%2FaG7nHZvqjHAqqJv7S%2FeZ8xLPfBS1uocqe67aaggUac%2BNZf%2B2QFxhd%2FO75auQme%2BnjwGq83k1Rdl4rsTwTCCodRw%2FkJLhCy5Gf9qX6D2OgnLJJcDV5SBE1edQ3UOFTNNzBtxnRTAeEB3b414xgttjiYFVCQuU%2BiQdoTzgAUOiepXwiWyUVqoOWvSXPlrgABPGf1cEPbxnnDmsPNMsJ2%2FPNgL1FyBDk6Uw0cP%2F%2BnmyJ0hldBIiQtU3utW5NCu89oBJW4j25uYD7p%2Fx5%2BVJdNO3WSzed2RnUcLxTqw0uUejHp6ECF9tgBFJ5jyrA8oupwyjMFVF2KfqRiA2HqeD%2BdXz3Rj9ud2WpBhc5MXRhQNV3DbW5IA3ODNlLbVJpnsf6rBgCbd%2FmzMjXpUxO5nXYB8WtbxhEi6uCATBSdjtXmoS71LU2sL1zq7%2BwSbd6iOH60KSHV9HpG2Iht1kmgV%2F4HtFaERXd3VJ1gc57xJK%2B6bO9x6eJaNwZvMmLRVmMoEhvhrpv7HTrYiA0mZir0HFcPz%2F2MvduHq5M%2BRlDU7fPZZOGiCsPkA3k1%2FvW9DC7odTJBjqkAcqskoJBj9ISPEWyW%2FsGQSEnVeYSUV96VUmk40PllFZXdW%2BBEfOwGMG5k6CvqVTJ2tZgt6YO%2F%2Bw4jAdww2VHPXr0u%2Bmf2gJIBK6wtJE4JcZHN2MdhzP%2FL3DKn9FlPOID00scS4coxSiN1gYGagWA7uTXmXnDfdpjCuawPxSge%2BTl0YWVoozPotfh%2FFiFAUcKPjFEeQXTMLrogJhq%2FSUi%2FwEGBkoS&X-Amz-Signature=3c7109b3054d729d86cb79e4428177cbbcb0383fba0468a1be4369eeeec61ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
