---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466335FVPE4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC2KU7l8A4bobnkgigU%2FIhNQ8GzvrtnGRFPlFIsjoyJAIhALLnuG6S3Kwsnpy%2F1FHjd18eVBnzBJuvoONwIhDC%2FSiUKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1YXj86jQ9nVgruzUq3AOQEBIhOxRuGsj9NXA%2B2LGnPQ1V%2B1BYUXkpzUKdqVSKi0SUkEtXvBbHzL2yO9nIV5o35inqZCkJKFNfCpKNa2b%2FrE%2FXqz%2FCLeQ2OMz2ngb6SPnmefxwNWVwwVXOw2gV33cKyQhCH5kfwlhWuQjRLWhV8eAMdJBo19G0eHwa48gLl%2B2aVyvVLw6dlLyqsAZOK%2FrXWN%2BI1XwWS%2BMICK9xU0P26cJwDRlw6dD9Cg1IZHS0oIjnglKp5eX1Xhb6XlzrX3xETcrf0iAyKDeJAJNjXRUPtL%2FjuXIL%2F4LFW46BHrrN54apT40p8OR9LLzyWsrxmJhahHifoccS76D6opogFkeANAqrCy%2BwFP%2F6KhLJlgwUN14Ue4TCHL5wrT0Zzwj336PX4sqN6C%2F2%2B9HJ7rcd9Whf3l72MD5n6UvSz1M8VeqSzt5Ea87o6Vrnc3%2FgV0AeU4DzRekoVaOcmiLLPvFcuaMmt30vm6OQWv5KSKkwsaEFG9V%2F0Aje8Yw%2B3kZV%2F%2FVWvOXlFuMqBMtEwp7X%2F%2B5I3rFQTfpDGsN4FhGM2nJjOuBl303uZj9U0O1MvXWwHtVql1Gnvd%2F%2BsAuPwARiwyPQJF9flfEX%2BVuv0jgGSLnSdOMPu0wNBmGPXJNh7pdmwjC57tjJBjqkAenZWGdSf1mikkCwwApfauW5eODrtwAu6aUKC4hanPJ4EfS%2Fi8%2Fd6K8uNE%2FUzd4GJ%2BNxZP43NZnfIb069G4fH5Kuy7Le6H3V36%2BxI971Rrc9XwZ8szVrMAgkhaml%2B9gQRExNDqlFGHcmjll0UINd82xFkjSr4w2A0Gi2LzIYvrvBqFSFFaxaKhOQVpV34TO5o627gFdrLBPyAyGmV6PnhCDcUyu3&X-Amz-Signature=d3a63f032f7ad5b175159b8ba4cbb1d5bc962e1fdc5d3f0323e61f42e5a9e76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466335FVPE4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC2KU7l8A4bobnkgigU%2FIhNQ8GzvrtnGRFPlFIsjoyJAIhALLnuG6S3Kwsnpy%2F1FHjd18eVBnzBJuvoONwIhDC%2FSiUKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1YXj86jQ9nVgruzUq3AOQEBIhOxRuGsj9NXA%2B2LGnPQ1V%2B1BYUXkpzUKdqVSKi0SUkEtXvBbHzL2yO9nIV5o35inqZCkJKFNfCpKNa2b%2FrE%2FXqz%2FCLeQ2OMz2ngb6SPnmefxwNWVwwVXOw2gV33cKyQhCH5kfwlhWuQjRLWhV8eAMdJBo19G0eHwa48gLl%2B2aVyvVLw6dlLyqsAZOK%2FrXWN%2BI1XwWS%2BMICK9xU0P26cJwDRlw6dD9Cg1IZHS0oIjnglKp5eX1Xhb6XlzrX3xETcrf0iAyKDeJAJNjXRUPtL%2FjuXIL%2F4LFW46BHrrN54apT40p8OR9LLzyWsrxmJhahHifoccS76D6opogFkeANAqrCy%2BwFP%2F6KhLJlgwUN14Ue4TCHL5wrT0Zzwj336PX4sqN6C%2F2%2B9HJ7rcd9Whf3l72MD5n6UvSz1M8VeqSzt5Ea87o6Vrnc3%2FgV0AeU4DzRekoVaOcmiLLPvFcuaMmt30vm6OQWv5KSKkwsaEFG9V%2F0Aje8Yw%2B3kZV%2F%2FVWvOXlFuMqBMtEwp7X%2F%2B5I3rFQTfpDGsN4FhGM2nJjOuBl303uZj9U0O1MvXWwHtVql1Gnvd%2F%2BsAuPwARiwyPQJF9flfEX%2BVuv0jgGSLnSdOMPu0wNBmGPXJNh7pdmwjC57tjJBjqkAenZWGdSf1mikkCwwApfauW5eODrtwAu6aUKC4hanPJ4EfS%2Fi8%2Fd6K8uNE%2FUzd4GJ%2BNxZP43NZnfIb069G4fH5Kuy7Le6H3V36%2BxI971Rrc9XwZ8szVrMAgkhaml%2B9gQRExNDqlFGHcmjll0UINd82xFkjSr4w2A0Gi2LzIYvrvBqFSFFaxaKhOQVpV34TO5o627gFdrLBPyAyGmV6PnhCDcUyu3&X-Amz-Signature=10e29eb449cd7df200dbecf26167d1d7fffa218815a35cde26b41b2b1a1da57e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

