---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBMVN7KX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0PQyFPSyXyx64GhLLb6iBYKMiterE%2FWgBzLZpKzJckAiBaVkrcziqcwdbnc31kSN2aUCi2oJn%2Fas4G2r%2Bct0gSUCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC6xp%2BtKjWUXyRGMKKtwD8kEdjP5wf9DMC0j5XTOAZ9Nb4h7zRe0xrS9cIjwuZIBQ8YifGJOlJDFjXgtnGyXiX%2FXGMM9aLAKaGs6S756JWss3mjfHrOwG6W3U7IM2jmBYWEn0wgbLBEf5dEq8bIV%2F8vTB2%2BTWkkdJ88kycfQ8%2FM90NtOnBDXX419OqMUsHa88vj2tJjJpOTvSBTgUxLCI6ckXUT%2FaHq7KLuKslytyHTkpm53EHg%2FPXkrPFqTnAVAlJwoJExOCnRfqAVqsPBmMu6CnDF6cTUaJq1pTdB4LOc0MX22oeitW1utcYkVHcdQuJmuRq08Z7RAl5TmP9jxlimhp32zsNa9IPE%2BBgCzpiBMhWw7Fpry%2Ffpcole3K9sv0%2Bh1qkcNEDNb2phNXi8ArfgIbC563uFfwlyK%2B4iwxbu89LcJmGeQZV0fkKb%2BdQFfCRw6em5lcRHZ6%2BJLr%2Fvj6XBp8kBom2UB93oCiu1iG5hjZU7wgb8V7PqB2jV87xT%2B5GJviZ%2Blzie4aBSXxySa5b%2FdiCKmoyHTTJ1r4W78ayiAlMYNWLBy%2BVABB7qSQCNTFSCXJ2lMKZeVqT%2BA3eQf%2FgL9iOKH6B9inoVxaUD9BkHh4I%2F3J4Q1a%2F6sLZlBNMRvje35gQiKDeXDe4bYwp%2B%2FYyQY6pgFPxboBZICx5yDMhA6%2F8FcXQxAWVwPNkswQ8FEf38rluii4tOrNscI9M7j8XvNiVHDOdI8Cwvks58YMrXxhAoIqggjkMHetHn3JxouJ8ddMpRz%2BbRufVwwMN1SYqZZ%2FwkdeJFw8qJclcvnH5xkGjhkomZjoBHRAHaEIgMGHVppMGq%2FgIDsiALudC2Uo1MxjaxCE8ea03A%2B99Z75Fw8ilHlJbQnEbFYu&X-Amz-Signature=7f28e4950dc89c1bced2bacabfba97092f7d5435f660fd0afa3b590592dcedbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBMVN7KX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0PQyFPSyXyx64GhLLb6iBYKMiterE%2FWgBzLZpKzJckAiBaVkrcziqcwdbnc31kSN2aUCi2oJn%2Fas4G2r%2Bct0gSUCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC6xp%2BtKjWUXyRGMKKtwD8kEdjP5wf9DMC0j5XTOAZ9Nb4h7zRe0xrS9cIjwuZIBQ8YifGJOlJDFjXgtnGyXiX%2FXGMM9aLAKaGs6S756JWss3mjfHrOwG6W3U7IM2jmBYWEn0wgbLBEf5dEq8bIV%2F8vTB2%2BTWkkdJ88kycfQ8%2FM90NtOnBDXX419OqMUsHa88vj2tJjJpOTvSBTgUxLCI6ckXUT%2FaHq7KLuKslytyHTkpm53EHg%2FPXkrPFqTnAVAlJwoJExOCnRfqAVqsPBmMu6CnDF6cTUaJq1pTdB4LOc0MX22oeitW1utcYkVHcdQuJmuRq08Z7RAl5TmP9jxlimhp32zsNa9IPE%2BBgCzpiBMhWw7Fpry%2Ffpcole3K9sv0%2Bh1qkcNEDNb2phNXi8ArfgIbC563uFfwlyK%2B4iwxbu89LcJmGeQZV0fkKb%2BdQFfCRw6em5lcRHZ6%2BJLr%2Fvj6XBp8kBom2UB93oCiu1iG5hjZU7wgb8V7PqB2jV87xT%2B5GJviZ%2Blzie4aBSXxySa5b%2FdiCKmoyHTTJ1r4W78ayiAlMYNWLBy%2BVABB7qSQCNTFSCXJ2lMKZeVqT%2BA3eQf%2FgL9iOKH6B9inoVxaUD9BkHh4I%2F3J4Q1a%2F6sLZlBNMRvje35gQiKDeXDe4bYwp%2B%2FYyQY6pgFPxboBZICx5yDMhA6%2F8FcXQxAWVwPNkswQ8FEf38rluii4tOrNscI9M7j8XvNiVHDOdI8Cwvks58YMrXxhAoIqggjkMHetHn3JxouJ8ddMpRz%2BbRufVwwMN1SYqZZ%2FwkdeJFw8qJclcvnH5xkGjhkomZjoBHRAHaEIgMGHVppMGq%2FgIDsiALudC2Uo1MxjaxCE8ea03A%2B99Z75Fw8ilHlJbQnEbFYu&X-Amz-Signature=8d9181d3f71ee203a77837cdc827a0f7cb28e210fd25e64a0e28488a32809052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

