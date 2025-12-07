---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI4ABVJ5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PL%2FdppYXm5NOfKZlOCtbJWbY%2F%2FVScr0lxVS0WmKxrwIhAJT2aiaVe1BjOLZDPmwLcSmI%2BVQpBdLd1bzMjenxhnAFKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkszkJgRxfkSye4B4q3AMIpIc8At2E0j0nSTHltA7e%2Bjhlqm2%2B7o2cudJH7GgQi32x0y7xFeX2iKaU1H2a6csAsePT0eUUKmHp4CpwZts2w32W0uDN7UQ7k1Ywg%2B10Ioy3S1Ryw%2BHZHbAOJW1AfEpzXQq4rc0WMdhzGOpx0y8SIuD%2B4rfS1Eb5DKDiebZBTULDyH4S7rKb2j%2BVwm6kialj4n%2BJ7UzQmsBg1o%2FYQbB9LDPCfq2KnDRR1sbDmz9gLqRLrp6TUTrkZRpQbdoX3mbMH9e1G7BASTuhVwssU5SuX3Fbt8bOAKfG6W2ztIKgQ41bV8dHH3BPB9j6AJvqWIRMCUgfjtdmK6kWccDSfQpHUkLxvW38T%2BKsRLuIgQeOwntbGiyYVcuaftqjw%2F3M9eTxRe2xcWBah6HS4Jq36cHOk94eC3YUvBdWfVCj8cfYB9qgAUT6jn4jodoV0I6rojns4M%2FgdUgm4YUG8sOCRswgBfayAyXjUta0qxJo35FsNlO4jWdlHSURGoX8zb%2BHqj1DETH%2FaI%2FqK8bPCgsIS3FOwFJiFelE5JfH9O0yHfCdPiryWsCX1baMwDCvkKN1MmT3AdgxNCSOBknGYFQ%2F%2FuW2rvg%2BzPNOtXCNICfRweo%2FOZAoNcH7P2vgzqqVGzC9x9fJBjqkAUaHRn78bsp9FuOfLIo%2FKuKk7rWuAa6SODT6kgdP0uIEwoTSLUbkSlk%2FIysm51Ys6eqMyOVa529d5b13gZaRdXnH9mG1Xx64zbtG5EsTjRxkHesThF%2Ff5m9tvhi%2FLhapCBr9tCUyLxdFh20MoHd4TiVwpAwoqKGag%2BJ4KRLh5ajFKruLjVtuFk336EDEbXYqvTXYQ3DqDxFbj%2BF3Kqxd5VTnJog4&X-Amz-Signature=2a2b0337eba1971d967718b1c73d1f060b4944ab917a57f349bdefb471efd443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI4ABVJ5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PL%2FdppYXm5NOfKZlOCtbJWbY%2F%2FVScr0lxVS0WmKxrwIhAJT2aiaVe1BjOLZDPmwLcSmI%2BVQpBdLd1bzMjenxhnAFKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkszkJgRxfkSye4B4q3AMIpIc8At2E0j0nSTHltA7e%2Bjhlqm2%2B7o2cudJH7GgQi32x0y7xFeX2iKaU1H2a6csAsePT0eUUKmHp4CpwZts2w32W0uDN7UQ7k1Ywg%2B10Ioy3S1Ryw%2BHZHbAOJW1AfEpzXQq4rc0WMdhzGOpx0y8SIuD%2B4rfS1Eb5DKDiebZBTULDyH4S7rKb2j%2BVwm6kialj4n%2BJ7UzQmsBg1o%2FYQbB9LDPCfq2KnDRR1sbDmz9gLqRLrp6TUTrkZRpQbdoX3mbMH9e1G7BASTuhVwssU5SuX3Fbt8bOAKfG6W2ztIKgQ41bV8dHH3BPB9j6AJvqWIRMCUgfjtdmK6kWccDSfQpHUkLxvW38T%2BKsRLuIgQeOwntbGiyYVcuaftqjw%2F3M9eTxRe2xcWBah6HS4Jq36cHOk94eC3YUvBdWfVCj8cfYB9qgAUT6jn4jodoV0I6rojns4M%2FgdUgm4YUG8sOCRswgBfayAyXjUta0qxJo35FsNlO4jWdlHSURGoX8zb%2BHqj1DETH%2FaI%2FqK8bPCgsIS3FOwFJiFelE5JfH9O0yHfCdPiryWsCX1baMwDCvkKN1MmT3AdgxNCSOBknGYFQ%2F%2FuW2rvg%2BzPNOtXCNICfRweo%2FOZAoNcH7P2vgzqqVGzC9x9fJBjqkAUaHRn78bsp9FuOfLIo%2FKuKk7rWuAa6SODT6kgdP0uIEwoTSLUbkSlk%2FIysm51Ys6eqMyOVa529d5b13gZaRdXnH9mG1Xx64zbtG5EsTjRxkHesThF%2Ff5m9tvhi%2FLhapCBr9tCUyLxdFh20MoHd4TiVwpAwoqKGag%2BJ4KRLh5ajFKruLjVtuFk336EDEbXYqvTXYQ3DqDxFbj%2BF3Kqxd5VTnJog4&X-Amz-Signature=8c4da78dfa1e8e184976f4b2a41f9a57a2f2b6abaec6e782a4d35b666843f212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

