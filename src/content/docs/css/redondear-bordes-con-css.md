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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSQ7QC7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmY8vzlST84zhafG%2Fk3lAkHVXsFIkviuZux1ivZI%2BzmQIgTfRU4ftExg4UdJW2x5xNUT89xlemRgpqQIFbWDdRX6Iq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIVt0KX3eqF9ovDQtyrcAyg4DOMHriqPWbC%2BLplzHQjTZBv1OeIKocWrxE5mQmRj%2ByobEhxii8UuUzrGrHNdTDac0o%2BYWjUXjrDgwjQ%2Fh%2FiFE7%2BnYumJYYbTutB%2BVCjWdVYxpI%2FlLeHVBG%2BXIBLsqzGdygvz9U5SaNg3RRwb%2F9HOJyNkdzeSJ3bLe043Lvgxnnu8wgc9v8W9bgmxvpk0m%2F8LRLVeIEQDzZRYo%2BHQTnpykO6c0M%2B9koNmVM8nP71kWiw0woI81Adp%2FmzaORgGBEWOd%2FpAmnAmQ%2F8S58sBAPO0CyUuYTvKGWNjKFPWTSt6GSqkh7iBpXsjCORa4Wt7RTdk65taqNIRam6FXwC8WHvjTl5no3%2FqAq1uqeyxxnPsRyUbtdw4%2FPsTm%2Bc%2B2JjGVMX%2B4rcWBfDmJ%2Bkhjx5va81dkhYoDGZMdFELHvZgjJYZXx9qlBwevIbmhmwo%2B%2FoMY8ha4thugScLtwBMQVdiP%2FemBLyAmLM00h%2BpV5lkayEgMertcYiw8I%2B1cKUujKI6DL%2FyyMeNdvAcGHtSDnQRHf4fJIVKzhLGzD93lCtAo7Wh16NtL6ptHRcgeEMxL%2FeDoKp1xKt3WL26nLhyXGlwNd45OG5zXCTG00WfayEaCS9JLz7LO%2BAvXY%2FF5X9CMLnwy8kGOqUBgjQoQF50lbJiiZ%2BvGmhYjRzoG5oWAID%2FWun6pqfxjXyUKWUIikkv6NtQ2DDBtNgDoZrL3ELhZmdCY7LI6QkIBlGTCJtPtLyqqiDkAUP73ldmzAuhlpB0wKdcL5q1dtxuF4RSdAwPazndPQNtswpxyqWzUVtJhsuQOiYuJ1jopD4qhjnViqgJpTiG6xhxROGF4AcFQtlIcMSHz8rSat77KfxLVlL6&X-Amz-Signature=e4c2230c0ab0208de0a51f91563c7a7391be4ba4e014fbd48bce09f3acc06543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSQ7QC7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmY8vzlST84zhafG%2Fk3lAkHVXsFIkviuZux1ivZI%2BzmQIgTfRU4ftExg4UdJW2x5xNUT89xlemRgpqQIFbWDdRX6Iq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIVt0KX3eqF9ovDQtyrcAyg4DOMHriqPWbC%2BLplzHQjTZBv1OeIKocWrxE5mQmRj%2ByobEhxii8UuUzrGrHNdTDac0o%2BYWjUXjrDgwjQ%2Fh%2FiFE7%2BnYumJYYbTutB%2BVCjWdVYxpI%2FlLeHVBG%2BXIBLsqzGdygvz9U5SaNg3RRwb%2F9HOJyNkdzeSJ3bLe043Lvgxnnu8wgc9v8W9bgmxvpk0m%2F8LRLVeIEQDzZRYo%2BHQTnpykO6c0M%2B9koNmVM8nP71kWiw0woI81Adp%2FmzaORgGBEWOd%2FpAmnAmQ%2F8S58sBAPO0CyUuYTvKGWNjKFPWTSt6GSqkh7iBpXsjCORa4Wt7RTdk65taqNIRam6FXwC8WHvjTl5no3%2FqAq1uqeyxxnPsRyUbtdw4%2FPsTm%2Bc%2B2JjGVMX%2B4rcWBfDmJ%2Bkhjx5va81dkhYoDGZMdFELHvZgjJYZXx9qlBwevIbmhmwo%2B%2FoMY8ha4thugScLtwBMQVdiP%2FemBLyAmLM00h%2BpV5lkayEgMertcYiw8I%2B1cKUujKI6DL%2FyyMeNdvAcGHtSDnQRHf4fJIVKzhLGzD93lCtAo7Wh16NtL6ptHRcgeEMxL%2FeDoKp1xKt3WL26nLhyXGlwNd45OG5zXCTG00WfayEaCS9JLz7LO%2BAvXY%2FF5X9CMLnwy8kGOqUBgjQoQF50lbJiiZ%2BvGmhYjRzoG5oWAID%2FWun6pqfxjXyUKWUIikkv6NtQ2DDBtNgDoZrL3ELhZmdCY7LI6QkIBlGTCJtPtLyqqiDkAUP73ldmzAuhlpB0wKdcL5q1dtxuF4RSdAwPazndPQNtswpxyqWzUVtJhsuQOiYuJ1jopD4qhjnViqgJpTiG6xhxROGF4AcFQtlIcMSHz8rSat77KfxLVlL6&X-Amz-Signature=a9b61fffe6bfdc9923e7039bdef7a4045f4b8277d126b4db2552690a889ad706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
