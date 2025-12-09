---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2FJQEBQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx936AcZC%2FCLIrDK0sWKW74OpQIqELIBL3ojUyqWEBxAiEAg1fBBk9Wk73fL%2FobOwBddxs47CaBhKLms3Ilseml45gqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLA2c9sC%2ByCavns%2BSrcAzkYdLhGfp6%2FsLWFl2T4AS5Kovz%2FTMw7UBrI2xbL44If2hSpfxx1%2FIf%2BSdHT0qYOu2Ymai4ZYlkR6HMmtn3oTb4ftzSiyop7kzxjSiSw%2BC4v28l1ETKA8606PbNNmXUA9v5xYeZPI34KYXjH4kEvxsE27YiH1YqfGTJpz0VmmRnpDd8VZ8%2FYSIPVKiMKtip3pfXMZCFeURmzVf7PvreaFFketNY%2FeqCXzeRLGA5mOyF3I4O1klgW%2BEWyDzS%2FsZEe9Fds%2FWaa1gOau383%2Fl6quOYn9cu3wArCEVrntLWxGXuKG%2BqLFPN6PLOqMSij7SOBwGyw85VDgrMOnKarxoGdp121ewPdJYF7%2Fo5%2FlMmuLqtUsbjZQWvOW8aLFUmKPYA7DDCwNjdkCUHAcGjBgBABKBh8F5%2FX%2BEiTpv%2F5rJhJnvGyX9%2B7iLTZv44gh%2Ba%2B%2B7%2FqUNz%2FMDMizbVyUUTocSFaogwaWXUJ%2BIBmM7eRPA0xSC%2FIFhLr1TLuCvO30WSrTo3C4y1APVL%2BwUck2YhlMpbV9don5MxYMAtsnco6J8fjtVmuz5lWj5h7Yz3vXFQ4TOaeKfnYsE12JsuAYPyL9uyTdr0NzCXeOR%2Ff1pFoM4hnauDZzKxotPBBbZImIbAwMJGu3skGOqUB9t8re7A4OZeKKcShi9F3sd5bO7InRGE5DqgOsk2wnglgfxqZsiGux28V7yWbLEIOXSPlesSkx9roDeoDOobZlV4K%2BwY4gVzItT0iXtoG0U%2FaCvpMHpG8UGLDA9fWPdz9lQZWa7QA3uQ1urrjjqmumIk%2BqIfU%2Bo2gjT9sv3vKevuYRwsCz5jnmDfbKsAXNiK9OBn6qg7er7itGv1FqtVsheQMB2YP&X-Amz-Signature=10f477594d63523fc3afcf8d8e14ca4c56a82c6407aaa063d76c8f9ed391ebcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2FJQEBQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx936AcZC%2FCLIrDK0sWKW74OpQIqELIBL3ojUyqWEBxAiEAg1fBBk9Wk73fL%2FobOwBddxs47CaBhKLms3Ilseml45gqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLA2c9sC%2ByCavns%2BSrcAzkYdLhGfp6%2FsLWFl2T4AS5Kovz%2FTMw7UBrI2xbL44If2hSpfxx1%2FIf%2BSdHT0qYOu2Ymai4ZYlkR6HMmtn3oTb4ftzSiyop7kzxjSiSw%2BC4v28l1ETKA8606PbNNmXUA9v5xYeZPI34KYXjH4kEvxsE27YiH1YqfGTJpz0VmmRnpDd8VZ8%2FYSIPVKiMKtip3pfXMZCFeURmzVf7PvreaFFketNY%2FeqCXzeRLGA5mOyF3I4O1klgW%2BEWyDzS%2FsZEe9Fds%2FWaa1gOau383%2Fl6quOYn9cu3wArCEVrntLWxGXuKG%2BqLFPN6PLOqMSij7SOBwGyw85VDgrMOnKarxoGdp121ewPdJYF7%2Fo5%2FlMmuLqtUsbjZQWvOW8aLFUmKPYA7DDCwNjdkCUHAcGjBgBABKBh8F5%2FX%2BEiTpv%2F5rJhJnvGyX9%2B7iLTZv44gh%2Ba%2B%2B7%2FqUNz%2FMDMizbVyUUTocSFaogwaWXUJ%2BIBmM7eRPA0xSC%2FIFhLr1TLuCvO30WSrTo3C4y1APVL%2BwUck2YhlMpbV9don5MxYMAtsnco6J8fjtVmuz5lWj5h7Yz3vXFQ4TOaeKfnYsE12JsuAYPyL9uyTdr0NzCXeOR%2Ff1pFoM4hnauDZzKxotPBBbZImIbAwMJGu3skGOqUB9t8re7A4OZeKKcShi9F3sd5bO7InRGE5DqgOsk2wnglgfxqZsiGux28V7yWbLEIOXSPlesSkx9roDeoDOobZlV4K%2BwY4gVzItT0iXtoG0U%2FaCvpMHpG8UGLDA9fWPdz9lQZWa7QA3uQ1urrjjqmumIk%2BqIfU%2Bo2gjT9sv3vKevuYRwsCz5jnmDfbKsAXNiK9OBn6qg7er7itGv1FqtVsheQMB2YP&X-Amz-Signature=9c1247051ba5e238cad77c2c840af26df17b6a79ddd0f9574475540209e6795c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

