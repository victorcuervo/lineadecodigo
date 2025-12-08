---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMWFQ6F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC48c%2B068bmjFNrg468UyQYpciKhq3%2FwN%2BzSxMLtsADGAIhAILxF7GCa%2FcUyHyHWr4By%2BpsIR989PRKmCv8t8mxCirJKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRlKwuG81AIO6Gnrwq3APst9%2B%2Fxb0Yags%2FyfW3%2Fpn0jdANGkzq0Kh%2BD18Uuji%2F7RLzyxalhepcksWg67reqvfg4OCW5N16AKIym3%2BrcPi3CxVA%2Fnqs5K%2F%2Fmre7Go2Qj0NovfhoCzXUrZzRcjpNksqFYJAeOUUkiv1Ux%2BKfQYISWKyWIMTJqGLh76bM%2BzJArVfu4HmxR9ZPzS2PsovWsxaG3TIHw2uAelqzPWZvfwYt0Nr9os8AXA%2FuByqdAXGgQWIH9sezGjB5kPXLTL6y%2B%2B4p1AEoMcwwaWvj7%2BcGPBFqdmuouO3vftuOb2VyO%2BSlxo007EU6P0HSqcQuJhL4bLrXM7X5gJb22ZEYso%2BoucomXlxcVdb9P0ZEWtg5t6fhMVBD2Lohtp8BV1zSmfPkPnf0%2BR93q4UtkIVRN%2BjIgL8NR%2Baz%2Fkkzf83MQSmE5sJ8w%2FHwXwqQpOL4MJ8hiVPMc%2Bo0TqV1UqPrNppBEgQhbfe%2BAIsg9ii09dhuQjCbh8DsyLBXJEqtYoNzoheW4rj3JJkqqU0VMs35lDNoU6bFDLcmv2tYvDbGbSdBiTIzOHa6CGeVQj1%2Bhkl%2BHNXyzQnmgn9CkgNMUiRr02Ty9bo7NdVXtPOujVDfPr9JzNu1CWTBTaoOrHf7VHwwtQ%2Bv8jCHw93JBjqkAfxwQrmm3NlZL9UJKAl2z45e0wxa8%2BWRGfdsRsMN90bpH%2FRbgxqoR4t6cbIvw7f%2BvwRsdFY0yTSbWw9UXpuHK1jq78YcVdOsQ9xcsM%2FO%2F%2BmSEuCJD0d7QHQf2NQce2lavxWe0dmmkIaM87WPmHd34%2BPONGQxAIx1HnPxUjDcNCvH%2FtKvoBz4twzGa%2FLjC4ew9cmlWHjwlagZpUezTY%2FESypB8%2BLd&X-Amz-Signature=fa79dff52710838d1380e3e0685f817f7cda9dd5fa82cece28580b6cce28e6d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMWFQ6F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC48c%2B068bmjFNrg468UyQYpciKhq3%2FwN%2BzSxMLtsADGAIhAILxF7GCa%2FcUyHyHWr4By%2BpsIR989PRKmCv8t8mxCirJKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRlKwuG81AIO6Gnrwq3APst9%2B%2Fxb0Yags%2FyfW3%2Fpn0jdANGkzq0Kh%2BD18Uuji%2F7RLzyxalhepcksWg67reqvfg4OCW5N16AKIym3%2BrcPi3CxVA%2Fnqs5K%2F%2Fmre7Go2Qj0NovfhoCzXUrZzRcjpNksqFYJAeOUUkiv1Ux%2BKfQYISWKyWIMTJqGLh76bM%2BzJArVfu4HmxR9ZPzS2PsovWsxaG3TIHw2uAelqzPWZvfwYt0Nr9os8AXA%2FuByqdAXGgQWIH9sezGjB5kPXLTL6y%2B%2B4p1AEoMcwwaWvj7%2BcGPBFqdmuouO3vftuOb2VyO%2BSlxo007EU6P0HSqcQuJhL4bLrXM7X5gJb22ZEYso%2BoucomXlxcVdb9P0ZEWtg5t6fhMVBD2Lohtp8BV1zSmfPkPnf0%2BR93q4UtkIVRN%2BjIgL8NR%2Baz%2Fkkzf83MQSmE5sJ8w%2FHwXwqQpOL4MJ8hiVPMc%2Bo0TqV1UqPrNppBEgQhbfe%2BAIsg9ii09dhuQjCbh8DsyLBXJEqtYoNzoheW4rj3JJkqqU0VMs35lDNoU6bFDLcmv2tYvDbGbSdBiTIzOHa6CGeVQj1%2Bhkl%2BHNXyzQnmgn9CkgNMUiRr02Ty9bo7NdVXtPOujVDfPr9JzNu1CWTBTaoOrHf7VHwwtQ%2Bv8jCHw93JBjqkAfxwQrmm3NlZL9UJKAl2z45e0wxa8%2BWRGfdsRsMN90bpH%2FRbgxqoR4t6cbIvw7f%2BvwRsdFY0yTSbWw9UXpuHK1jq78YcVdOsQ9xcsM%2FO%2F%2BmSEuCJD0d7QHQf2NQce2lavxWe0dmmkIaM87WPmHd34%2BPONGQxAIx1HnPxUjDcNCvH%2FtKvoBz4twzGa%2FLjC4ew9cmlWHjwlagZpUezTY%2FESypB8%2BLd&X-Amz-Signature=a0de5dc1256d6e45c3638637d07169f118aa17c7d3fb94a0aeef8eb49fd75fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

