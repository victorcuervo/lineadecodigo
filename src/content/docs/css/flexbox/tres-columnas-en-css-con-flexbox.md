---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QON4J5XC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsDKRhNihIsa1qTje%2FXQuxmhWEgAdKprkJucgJy0OOAAiB%2BCf2NhZFb8064tiD1d6v6sK2xr%2FwXnU0G2cAz62Ws5CqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZwreUVauQcaP%2B7alKtwDyVucMSOZVe4APilaHQoiIGl7%2F0MpvY7OANAxWnNl%2BP6NmzYXpvywuGcmVrY3ykGRu6t1ABmyNLDmxow4rTJ4mSIQYvwdLcTc1UqjdEbeL911DViOHFztHvl%2BANd3%2BKuTfTQ2JZ%2BQJL5NfM3P6fhw%2BddhmZVUsfUFUiKbahCyBlsFMtAu4d2sKi3bu%2BSKp2v7F9%2BtUaZbwvIn6YnsaZESYk%2FL6i7Ytm2ZcqWK5OPjNjvSIPFhZU1YGqtd89FkyZRDbpG0RlY5wu%2BkIVHi5kNUaoyRCuLU8%2BavhAl8jkGNzIlxTPvQUYh3t4k7DY3lwQ81GRzUjFUPVsnCM19AWkJZG5WDO%2BInrMYHK7xaAkDZirzLEzp6pwtRsBAKDWV5Dqk93PIbgLG11RS0qELtLVskHyqHfkoIrv8r8TjSz7a%2BOEYZBVVHounPlKENJ2xrCvhYk5ZGjl9JHdGapuMV4pCnSwRLgssSTj2Y74CFCg7jLrKM8Eg1GlgDDXdpebGrIuphnfGAZ1zJroAadw3LXXhYfFso3%2BMKm223nS30lwfWR8b3CO%2B0cB%2BFHKEb5tSm7DZNnsx5Ck7OfZ5f3zoS795YG1RLvMlKJWi9mXrTy9gqsrSv%2FRRYt5BZccJx6f8wyMLdyQY6pgGSxGMiCB%2BLNSsF65Km4vpu6nvS%2BsdzK0CMx0s7zP2OYOVyBz9xpOUs0mSC6%2BjRbCXeABzfuEQ7h%2FdAaWGocvgRNK1w4%2B6kqxABlM2tNlDNHRf3mGIDURT%2B7peOuqhryj2ABKx6b4i7SUPqvTr7uGEo49Wq0lxzOX1Si1w7Dw9Yevd3k%2BBJFmfd%2Fkf97XvuONWa9XZAVD053K70hBnOnyCuXemUxo71&X-Amz-Signature=786b791293653c7b52aee24b33ef44e2746d584980169962c7279aee5ee9e0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QON4J5XC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsDKRhNihIsa1qTje%2FXQuxmhWEgAdKprkJucgJy0OOAAiB%2BCf2NhZFb8064tiD1d6v6sK2xr%2FwXnU0G2cAz62Ws5CqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZwreUVauQcaP%2B7alKtwDyVucMSOZVe4APilaHQoiIGl7%2F0MpvY7OANAxWnNl%2BP6NmzYXpvywuGcmVrY3ykGRu6t1ABmyNLDmxow4rTJ4mSIQYvwdLcTc1UqjdEbeL911DViOHFztHvl%2BANd3%2BKuTfTQ2JZ%2BQJL5NfM3P6fhw%2BddhmZVUsfUFUiKbahCyBlsFMtAu4d2sKi3bu%2BSKp2v7F9%2BtUaZbwvIn6YnsaZESYk%2FL6i7Ytm2ZcqWK5OPjNjvSIPFhZU1YGqtd89FkyZRDbpG0RlY5wu%2BkIVHi5kNUaoyRCuLU8%2BavhAl8jkGNzIlxTPvQUYh3t4k7DY3lwQ81GRzUjFUPVsnCM19AWkJZG5WDO%2BInrMYHK7xaAkDZirzLEzp6pwtRsBAKDWV5Dqk93PIbgLG11RS0qELtLVskHyqHfkoIrv8r8TjSz7a%2BOEYZBVVHounPlKENJ2xrCvhYk5ZGjl9JHdGapuMV4pCnSwRLgssSTj2Y74CFCg7jLrKM8Eg1GlgDDXdpebGrIuphnfGAZ1zJroAadw3LXXhYfFso3%2BMKm223nS30lwfWR8b3CO%2B0cB%2BFHKEb5tSm7DZNnsx5Ck7OfZ5f3zoS795YG1RLvMlKJWi9mXrTy9gqsrSv%2FRRYt5BZccJx6f8wyMLdyQY6pgGSxGMiCB%2BLNSsF65Km4vpu6nvS%2BsdzK0CMx0s7zP2OYOVyBz9xpOUs0mSC6%2BjRbCXeABzfuEQ7h%2FdAaWGocvgRNK1w4%2B6kqxABlM2tNlDNHRf3mGIDURT%2B7peOuqhryj2ABKx6b4i7SUPqvTr7uGEo49Wq0lxzOX1Si1w7Dw9Yevd3k%2BBJFmfd%2Fkf97XvuONWa9XZAVD053K70hBnOnyCuXemUxo71&X-Amz-Signature=ddb961f0d71aa778f4f470499a864d1b31bbf3f3295227c7e3b0636c32a3359b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

