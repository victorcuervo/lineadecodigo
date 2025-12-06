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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSOXXVA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPjioK1Qd%2FLHQsT3sCyw%2B1Ha7Pt1Rcg8LXH3ixgHPovAiEA4SwyiNZmL9FKJLUv6g73NQK83ZWayfuCaxOXJk1YBiwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMDCfYFiemovhubUKyrcA19sFRoPvc7C59e%2BXNNmtLmZfKIOMkTFNlCaEBaw0w53nN4tgHmhVDCxZSCt6oG26L4GkhCe4L2O3Tn7ke64YoEZCHKBmBQH7UhTvpudpHze0bPT23H6LL0OQW64jj%2BYOBrTCh%2BHh%2FYBWsdUteTLzocWiqZ3O8Tymcs%2Fdh%2FuETGSr5h6ng6yLuw13VvHhf8NgFBbbgS0ESUZ7QbKBisvhnQy4q6knYzd1hEUOsx4P2y0UOjXT65YTpz84LqcNFPJUUm0wFF62OwbKgej1WjIrDzUPe7piOCGmL1hchXlEwhJKsNu%2FNTACo70xRPS8cS%2FQ%2FgTlWD6xKhHsUMDFilzqPcS9oe6a7suXwebLqSIy2eaPL%2Fxm7rMh62fPkwR5HzOxuKOGmiF6BynnUIH14%2BC6e1bQcKKLa4G8p5saa7BFZsNRfx4uISjom5iWWWRjC35OHegNPA5MvwhSZDJGXOzV0HqFjb%2BbF%2FguzbQXCONKcqGocyKUL9%2F7QCdRB5r9GhsgLYB%2FDjTHpZp8sciUeadGjowup7MyIDF%2FDH%2BxCo6kLX3cJgwUXqvXpMwa%2BtuceTP77puKtiY6uffeTIp56z3FmB2rMcV1Wc9EJqK1dfAhjNYsbh1ooQG2wtq8P5tMKem0MkGOqUBk0SWudBWbafSiWxl3rPGFpTC3mS7MlYOTYa4Vk73rfLPpaaMJDw1KMujnrqkuqVXtLSJlR2Oi1MczX%2Ft5qvkQNaMoJPs0yVnH6Tdv3DecM5qteUqJS%2BOoNr9gZuT2fbNuasPSTOhwi%2F6%2Bm8OZWtSm3JPpjfiC%2Bli3tmFjGqETy3sWvgX9XggLoDwHlzyijOpbj6%2Fegttqc3KIqiHYTQVGEkXgAZR&X-Amz-Signature=5f0fb411fc33f91fb1804297a19ca247362ae5417a7d18d7fb2e74d3d8592127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSOXXVA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPjioK1Qd%2FLHQsT3sCyw%2B1Ha7Pt1Rcg8LXH3ixgHPovAiEA4SwyiNZmL9FKJLUv6g73NQK83ZWayfuCaxOXJk1YBiwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMDCfYFiemovhubUKyrcA19sFRoPvc7C59e%2BXNNmtLmZfKIOMkTFNlCaEBaw0w53nN4tgHmhVDCxZSCt6oG26L4GkhCe4L2O3Tn7ke64YoEZCHKBmBQH7UhTvpudpHze0bPT23H6LL0OQW64jj%2BYOBrTCh%2BHh%2FYBWsdUteTLzocWiqZ3O8Tymcs%2Fdh%2FuETGSr5h6ng6yLuw13VvHhf8NgFBbbgS0ESUZ7QbKBisvhnQy4q6knYzd1hEUOsx4P2y0UOjXT65YTpz84LqcNFPJUUm0wFF62OwbKgej1WjIrDzUPe7piOCGmL1hchXlEwhJKsNu%2FNTACo70xRPS8cS%2FQ%2FgTlWD6xKhHsUMDFilzqPcS9oe6a7suXwebLqSIy2eaPL%2Fxm7rMh62fPkwR5HzOxuKOGmiF6BynnUIH14%2BC6e1bQcKKLa4G8p5saa7BFZsNRfx4uISjom5iWWWRjC35OHegNPA5MvwhSZDJGXOzV0HqFjb%2BbF%2FguzbQXCONKcqGocyKUL9%2F7QCdRB5r9GhsgLYB%2FDjTHpZp8sciUeadGjowup7MyIDF%2FDH%2BxCo6kLX3cJgwUXqvXpMwa%2BtuceTP77puKtiY6uffeTIp56z3FmB2rMcV1Wc9EJqK1dfAhjNYsbh1ooQG2wtq8P5tMKem0MkGOqUBk0SWudBWbafSiWxl3rPGFpTC3mS7MlYOTYa4Vk73rfLPpaaMJDw1KMujnrqkuqVXtLSJlR2Oi1MczX%2Ft5qvkQNaMoJPs0yVnH6Tdv3DecM5qteUqJS%2BOoNr9gZuT2fbNuasPSTOhwi%2F6%2Bm8OZWtSm3JPpjfiC%2Bli3tmFjGqETy3sWvgX9XggLoDwHlzyijOpbj6%2Fegttqc3KIqiHYTQVGEkXgAZR&X-Amz-Signature=8f5d40df0c18b5f42334bdcb6ce5e9e7b1073f27f9a34daa28c7326595cf721a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
