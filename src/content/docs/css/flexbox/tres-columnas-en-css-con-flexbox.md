---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7V25CI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD2PY8FOjYO2vMnYzbODMyiP2INfbJaV%2BpnFhL2dBUuQIhAItR2Y5Hei0YV3SZTLUd862b0PrWyfF6opfMVVPYk9QiKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxQypevd4QdviZRb8q3APBxw490u5ochPT%2BWUPK9s2dW9NGU73MjGDIR8B8ilKQY9WGA%2BGZFfO%2BHJTw6KyZG%2FCgGD2F%2FxTcIuZKKISPh6ZwjuA9a3PsQ35rJFBSEoJtOqIx7f0snNtaZgOCmSCLlr0J0zJIcjEgMxuHWITTQJ083au2YxgB%2BG3o%2BzKpoSDgNSq%2BSlrXLb%2BchrnUGbuYchX%2BogIRhHL93V6eiwek8boG%2FRCosdrFqp1fGqmDBy1X0vEo1FxEjlaDq6nSLTZQrr2zI5Xd73tx52OfvXwzXP7y%2BaC1NEKr8YWKIitccNCpHN0pQutTMksxHCE1ubyy1MYSKo765hI5%2FJIqY1ZYLBFAGiS7JWLiE2FeS10jrh9loDE0rweaLvSQJa6WqUDzX0pKNjFF3BEbBdolRDP6zGOkHTxjo9j4hZCZdFq9HN2DU4KHCp1ygcnsbXm4t7%2FHZGLv9nlEl3trdV7MqnUZvhV5Ch7m7rsgPJ%2Fvx05ZhicxbUTiyTSS5St8PiNGGGO00jfsk8diQJycH9ix3k6NbQgkGLvIIOLhbTU2rQlJlwuFI%2Fa6TSmfzOIyItm1qK3z9yeOxiMiAsa8iWWN0yl%2B4nS9I0KWhib8X0h1mkHV%2BMjVqsuUnCpKNkKSdAnYjCNvNbJBjqkAaG68Jx2FBMj4zjWZnpoJxX%2FpbUrUwW4Fwc1rlMluJMstb6uashrChi3WX%2FcoZezFASUwKE%2Bs5VBkAjwCwvuBYgpi%2BilfJOr3aXCzkoEDvEVf2mBryISxWJ2UT5%2BJAonm9e8gpjyAAv8TMocLElfvTMKIpQt%2FPNPZcq1RNtSvWfdhtGEVH1DTArkCt6IlCcw0rjwhGxgNzMvnBLlRjeS5EN0yd6t&X-Amz-Signature=4ab6b13e72f87d03be93a6568dfca9746e1a579f2e06f4a99ea91ecf10f6bb95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7V25CI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD2PY8FOjYO2vMnYzbODMyiP2INfbJaV%2BpnFhL2dBUuQIhAItR2Y5Hei0YV3SZTLUd862b0PrWyfF6opfMVVPYk9QiKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxQypevd4QdviZRb8q3APBxw490u5ochPT%2BWUPK9s2dW9NGU73MjGDIR8B8ilKQY9WGA%2BGZFfO%2BHJTw6KyZG%2FCgGD2F%2FxTcIuZKKISPh6ZwjuA9a3PsQ35rJFBSEoJtOqIx7f0snNtaZgOCmSCLlr0J0zJIcjEgMxuHWITTQJ083au2YxgB%2BG3o%2BzKpoSDgNSq%2BSlrXLb%2BchrnUGbuYchX%2BogIRhHL93V6eiwek8boG%2FRCosdrFqp1fGqmDBy1X0vEo1FxEjlaDq6nSLTZQrr2zI5Xd73tx52OfvXwzXP7y%2BaC1NEKr8YWKIitccNCpHN0pQutTMksxHCE1ubyy1MYSKo765hI5%2FJIqY1ZYLBFAGiS7JWLiE2FeS10jrh9loDE0rweaLvSQJa6WqUDzX0pKNjFF3BEbBdolRDP6zGOkHTxjo9j4hZCZdFq9HN2DU4KHCp1ygcnsbXm4t7%2FHZGLv9nlEl3trdV7MqnUZvhV5Ch7m7rsgPJ%2Fvx05ZhicxbUTiyTSS5St8PiNGGGO00jfsk8diQJycH9ix3k6NbQgkGLvIIOLhbTU2rQlJlwuFI%2Fa6TSmfzOIyItm1qK3z9yeOxiMiAsa8iWWN0yl%2B4nS9I0KWhib8X0h1mkHV%2BMjVqsuUnCpKNkKSdAnYjCNvNbJBjqkAaG68Jx2FBMj4zjWZnpoJxX%2FpbUrUwW4Fwc1rlMluJMstb6uashrChi3WX%2FcoZezFASUwKE%2Bs5VBkAjwCwvuBYgpi%2BilfJOr3aXCzkoEDvEVf2mBryISxWJ2UT5%2BJAonm9e8gpjyAAv8TMocLElfvTMKIpQt%2FPNPZcq1RNtSvWfdhtGEVH1DTArkCt6IlCcw0rjwhGxgNzMvnBLlRjeS5EN0yd6t&X-Amz-Signature=ac8f0e4c9409577c9d3565b17feba6e883b62f02d03ed3904a1031dd1271a2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

