---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOA6URYD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxzFZSvGkwJRvU06cTwrbAxreFVZGSny88zYChb%2BF2%2BAiA608L1I51WyhvrV2IfNS2C7NApSaDi5CGHHJUWzXl3YiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDhS%2BuAwobUVn5liBKtwDhvas1Vj9Gct6Ux4Pux0gk3ZvAXEu0zZRJpvPm%2Bu8OjOgC9G%2Bbx4k%2Fah9QAfERN8uNpYdLqiFs5F9jsACr02w6P3%2FR%2BG44p1Zkzpgew1phfdx%2F4759tfkUOxXK7mQQ4gKpQbu8LPNjA9jnZcdEBAltf15%2B3AMtogyNQVMaPel5CEIWeNvTHtZh290yIwOSOHvVfm91%2FCvzmVdT3fyNjTAJS79exYTPCCILWOzpIqKN5X6cBfsklWCkq2wrirBEcE1rt9EBXX3Wz0Cr%2FMRnzcxP85e1%2BQ%2BkZTOChDKGS1yuSWyZ6trgw%2BjeB0qAo89l7uL8WYkUCID%2Bey0ln9qXZbwz0QCfBqz4cbOGTrpnkeoiZxhq2jwlsvHELM%2F1G4HNEgZ5koAuM7FTRnzwTBF3QMYTKMZLuBhFvnktqaNLD11gYPFAgGPZ%2F1q931hpR9MCzsq1zBH1XKwMh4AaDqLJsImEKdrXPd7PM6iLQ2X3OVh%2B6ZdbpVMnGQQC2ArrDL7PK7haBrwN7M7qjHfwGpZTc056XSbrKd1z9lvYnk4sM2%2BwYA9t%2FFs%2BZUn2tVU1z%2B8CwLFVk6wAjqWU57ahiLQgN2yNW4Ps0Zh70DENjI0hMpLJjP5r%2FnAfvTJ%2FqzOpP8wwaHYyQY6pgGvT92%2FPBFFY3Bc6yMVLRFPxmJeUEiy9Z1K9r%2FtptR2cHBOUxRmT%2BetLSliSdWPUfr6DM1DvhXk%2BPSiRv2BzEhO7hlAUhZJl2d1%2FEk8ksfemXuEQOV6Zf2pHdYrI9JIu2rOulM64XS9NR7hvl82Zx7s18sZBjDXQEbsAKibruWA9pLzG78nxJsUTK1SLJAGv3cIYL8CkQ4DwHq55%2Bwlu9ChGqLsLnGX&X-Amz-Signature=68dea350480d51a6209e4d3dcef4aa4190151c9ce8af57824919c7c3d5466195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOA6URYD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxzFZSvGkwJRvU06cTwrbAxreFVZGSny88zYChb%2BF2%2BAiA608L1I51WyhvrV2IfNS2C7NApSaDi5CGHHJUWzXl3YiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDhS%2BuAwobUVn5liBKtwDhvas1Vj9Gct6Ux4Pux0gk3ZvAXEu0zZRJpvPm%2Bu8OjOgC9G%2Bbx4k%2Fah9QAfERN8uNpYdLqiFs5F9jsACr02w6P3%2FR%2BG44p1Zkzpgew1phfdx%2F4759tfkUOxXK7mQQ4gKpQbu8LPNjA9jnZcdEBAltf15%2B3AMtogyNQVMaPel5CEIWeNvTHtZh290yIwOSOHvVfm91%2FCvzmVdT3fyNjTAJS79exYTPCCILWOzpIqKN5X6cBfsklWCkq2wrirBEcE1rt9EBXX3Wz0Cr%2FMRnzcxP85e1%2BQ%2BkZTOChDKGS1yuSWyZ6trgw%2BjeB0qAo89l7uL8WYkUCID%2Bey0ln9qXZbwz0QCfBqz4cbOGTrpnkeoiZxhq2jwlsvHELM%2F1G4HNEgZ5koAuM7FTRnzwTBF3QMYTKMZLuBhFvnktqaNLD11gYPFAgGPZ%2F1q931hpR9MCzsq1zBH1XKwMh4AaDqLJsImEKdrXPd7PM6iLQ2X3OVh%2B6ZdbpVMnGQQC2ArrDL7PK7haBrwN7M7qjHfwGpZTc056XSbrKd1z9lvYnk4sM2%2BwYA9t%2FFs%2BZUn2tVU1z%2B8CwLFVk6wAjqWU57ahiLQgN2yNW4Ps0Zh70DENjI0hMpLJjP5r%2FnAfvTJ%2FqzOpP8wwaHYyQY6pgGvT92%2FPBFFY3Bc6yMVLRFPxmJeUEiy9Z1K9r%2FtptR2cHBOUxRmT%2BetLSliSdWPUfr6DM1DvhXk%2BPSiRv2BzEhO7hlAUhZJl2d1%2FEk8ksfemXuEQOV6Zf2pHdYrI9JIu2rOulM64XS9NR7hvl82Zx7s18sZBjDXQEbsAKibruWA9pLzG78nxJsUTK1SLJAGv3cIYL8CkQ4DwHq55%2Bwlu9ChGqLsLnGX&X-Amz-Signature=657e25ad0a38e7a879c1fb9f0a9233111ca108a2c2ec67a3a58569b85288391a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

