---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KATQVGI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA79D7sjgU5Di2qoN5cj2TDpz8qlGKcnuGGSQlJj614rAiBf38mSKM5fF4nWVrlCDIOzZhJjPatN5DHp1qtEIoNcXyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMph3dIBwR2WcTlvVGKtwDkBpKP5J7QkELBNv7wa2fETeeEUfo85VzP6BlJceGYucp9WRjUvgvdz5WyBbKOsxDhccKuJZkSkw5QFkdeI1E2iAyDZSXkuiK%2BhwGFESYiO6n%2BGCWzYZ8khuRS9ZKwK3pe1y6Kv41xuCTrYvQoN%2FQhMKx%2FQ8wYZE2wS3sn7vKbnuxVziMQYJli9f64%2F0GCi%2F6ksr5fKa6nM1w%2FIqitaXukYVudHnwjzBsQi6xprPNQizhLk6Bc1lX770GSgxioLxorDIIE3C%2BwkyHAEzkuS4ukbzjxwzGsC6GLReg8pixRiA7LJEmE%2BSfTtXWKxd6M9eim4D8b3MWybB8kK0JdaD4StrG%2B8w94uEjx9ZAhDfjHr%2FqSbODkSf70zmlTey7GRiPMco1POefX96hTJWSHz%2FymNPuCROGTNrc9ROOVIiCoIsPVXb68yUNz4ERXVX9IzL24E9JI1dSiyOBRFQ9ICzpOoxpA5R3b2bt3fQJXsg3KQs52UGeXj6x5BWE7xE92H0NHQcTyZBbf69IfJGFkEwjl8Zg13f%2BgkILMGrpWIC%2Fi0aWU3yH%2BiBJz7vM44F%2FsPS7SNwz9v98%2FmgRymblgWBRoriYKRxpbd9PwaqFoDNaD1t1WF9G7wV3nS%2FvzUAwxMTfyQY6pgEdVgTQIsXsUeF9yrw6s85yM1hs%2BEFMBzp34Cn2QMw7iLPK%2B3bruK%2FRGVB0a%2Bzk3mVfFi7%2FY2qc2AI%2FsAOMOQdYRoEv7CdQg0TwuLYWS78rL2NJraU%2BkM3adWgqKkCwYl74os4ROR14Zu913%2FC3Zf7qbzFlRppqvTqAxnPjrTuzDnbxqSaAF6EWWjTTui%2BbmjUFkRucoZbxlUB9gSmu2Q4soOv%2Bue6e&X-Amz-Signature=d60b18e2bad2516a273d171def7e833d083fb2a7215caf901cdd6d14e42f40d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KATQVGI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA79D7sjgU5Di2qoN5cj2TDpz8qlGKcnuGGSQlJj614rAiBf38mSKM5fF4nWVrlCDIOzZhJjPatN5DHp1qtEIoNcXyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMph3dIBwR2WcTlvVGKtwDkBpKP5J7QkELBNv7wa2fETeeEUfo85VzP6BlJceGYucp9WRjUvgvdz5WyBbKOsxDhccKuJZkSkw5QFkdeI1E2iAyDZSXkuiK%2BhwGFESYiO6n%2BGCWzYZ8khuRS9ZKwK3pe1y6Kv41xuCTrYvQoN%2FQhMKx%2FQ8wYZE2wS3sn7vKbnuxVziMQYJli9f64%2F0GCi%2F6ksr5fKa6nM1w%2FIqitaXukYVudHnwjzBsQi6xprPNQizhLk6Bc1lX770GSgxioLxorDIIE3C%2BwkyHAEzkuS4ukbzjxwzGsC6GLReg8pixRiA7LJEmE%2BSfTtXWKxd6M9eim4D8b3MWybB8kK0JdaD4StrG%2B8w94uEjx9ZAhDfjHr%2FqSbODkSf70zmlTey7GRiPMco1POefX96hTJWSHz%2FymNPuCROGTNrc9ROOVIiCoIsPVXb68yUNz4ERXVX9IzL24E9JI1dSiyOBRFQ9ICzpOoxpA5R3b2bt3fQJXsg3KQs52UGeXj6x5BWE7xE92H0NHQcTyZBbf69IfJGFkEwjl8Zg13f%2BgkILMGrpWIC%2Fi0aWU3yH%2BiBJz7vM44F%2FsPS7SNwz9v98%2FmgRymblgWBRoriYKRxpbd9PwaqFoDNaD1t1WF9G7wV3nS%2FvzUAwxMTfyQY6pgEdVgTQIsXsUeF9yrw6s85yM1hs%2BEFMBzp34Cn2QMw7iLPK%2B3bruK%2FRGVB0a%2Bzk3mVfFi7%2FY2qc2AI%2FsAOMOQdYRoEv7CdQg0TwuLYWS78rL2NJraU%2BkM3adWgqKkCwYl74os4ROR14Zu913%2FC3Zf7qbzFlRppqvTqAxnPjrTuzDnbxqSaAF6EWWjTTui%2BbmjUFkRucoZbxlUB9gSmu2Q4soOv%2Bue6e&X-Amz-Signature=8dafb1a2c5db0d48703569724a3013eaa97f11517c084b85c5ad7646d30e430f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

