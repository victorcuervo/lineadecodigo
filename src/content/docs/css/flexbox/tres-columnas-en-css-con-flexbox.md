---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7RDNFXB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTzmrz4A0u9PBm9cfU5QXpSbIbY%2FZXjSMZeXjpCAybNgIhALKFuosSjlUQaw4C0oRC3wiBYY3TmM5HABIyxXNi%2BpHyKv8DCGUQABoMNjM3NDIzMTgzODA1Igw%2FYxepZFkm0M%2FzBzMq3APQzd6guC8BfTtNIXm9eMWqKyXJsdWIVdwKPPyZzRaEvaKxrGim2bKL3awd0m6j2WfDBsjxojeKgD6xM1L7hGhfym%2F%2BZrotjwDetqw2kGHaMps4fh%2BQSeCM6XiwcChRuzUy3Mv7J7YbiTcUWJsL2vD16ygQ5tYfVluRgkBnWFsq6Hk0GAX8O8q9S33xgt4yQKGRi%2BKA8vE5pt7jt3pa%2F8w%2FZgsHxT8ZYP3m0mC8Rh3oduidfJ5MU72zC9KwWxFDR143%2FIX1oZ85OniucK%2FpV3orgYGlbi%2FFJr8hsBsLfeMyOeTmBG9cinCO%2FdGI34JwLJm4aGXx5Az8poi%2BorJH1Y%2Bygx8JnCKe8vrQBfNhnj5vusovB9L18PZKqtBLQ85Ph02IOSQll1HruWKb3kgR0VEUoPk1VY3FUZTRjAydzKwEEZps6bRiLFQxg8H4VRs0hWO%2Fp1%2FopXNsapEOyf2KSFZCehCcFNianppz6ulDoBc4OXIVD%2FYB5NcnIDLx7C%2B8pxunXaGBmDYvxS9C307KV9nhBfgpk0fbU%2FKPmSAF%2BYkEHqCNiUdXiwdnXvWtJ0lsFSlVNggoJj2TTkfwC%2FSutLscTIKi1a3TsQLn9pGLzKwl8KWob7xhe5LiC1JqszCx7szJBjqkAaTEIB2yU0xgEQFf3n6txVDVdrbfLOu3cxhM95OitOryVHKjjEsb0rwCAPSOw2QBvJEYOQfil9QK5AnRDIn596FFqHmcSsJ3CxOb0qR2wDbpP%2F9LGrhbQPReohMe8b6xHGXDBukZQV%2BjB54aErspbJiLo6vaB%2BKNBpfFhiDDshmE3K%2F075nrx7ac8zArOX28lyfbAFpiGAZNGUTobS35geGQRnHM&X-Amz-Signature=3bbff2349c1e672cdd0c3aaa55072b5e7f142cc9f6c8d48e0956e41242747b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7RDNFXB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTzmrz4A0u9PBm9cfU5QXpSbIbY%2FZXjSMZeXjpCAybNgIhALKFuosSjlUQaw4C0oRC3wiBYY3TmM5HABIyxXNi%2BpHyKv8DCGUQABoMNjM3NDIzMTgzODA1Igw%2FYxepZFkm0M%2FzBzMq3APQzd6guC8BfTtNIXm9eMWqKyXJsdWIVdwKPPyZzRaEvaKxrGim2bKL3awd0m6j2WfDBsjxojeKgD6xM1L7hGhfym%2F%2BZrotjwDetqw2kGHaMps4fh%2BQSeCM6XiwcChRuzUy3Mv7J7YbiTcUWJsL2vD16ygQ5tYfVluRgkBnWFsq6Hk0GAX8O8q9S33xgt4yQKGRi%2BKA8vE5pt7jt3pa%2F8w%2FZgsHxT8ZYP3m0mC8Rh3oduidfJ5MU72zC9KwWxFDR143%2FIX1oZ85OniucK%2FpV3orgYGlbi%2FFJr8hsBsLfeMyOeTmBG9cinCO%2FdGI34JwLJm4aGXx5Az8poi%2BorJH1Y%2Bygx8JnCKe8vrQBfNhnj5vusovB9L18PZKqtBLQ85Ph02IOSQll1HruWKb3kgR0VEUoPk1VY3FUZTRjAydzKwEEZps6bRiLFQxg8H4VRs0hWO%2Fp1%2FopXNsapEOyf2KSFZCehCcFNianppz6ulDoBc4OXIVD%2FYB5NcnIDLx7C%2B8pxunXaGBmDYvxS9C307KV9nhBfgpk0fbU%2FKPmSAF%2BYkEHqCNiUdXiwdnXvWtJ0lsFSlVNggoJj2TTkfwC%2FSutLscTIKi1a3TsQLn9pGLzKwl8KWob7xhe5LiC1JqszCx7szJBjqkAaTEIB2yU0xgEQFf3n6txVDVdrbfLOu3cxhM95OitOryVHKjjEsb0rwCAPSOw2QBvJEYOQfil9QK5AnRDIn596FFqHmcSsJ3CxOb0qR2wDbpP%2F9LGrhbQPReohMe8b6xHGXDBukZQV%2BjB54aErspbJiLo6vaB%2BKNBpfFhiDDshmE3K%2F075nrx7ac8zArOX28lyfbAFpiGAZNGUTobS35geGQRnHM&X-Amz-Signature=4a2fad35fb44a496bb443e562b93dfa339c2d63b0b5a151ffc62a4f4fd5f4f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

