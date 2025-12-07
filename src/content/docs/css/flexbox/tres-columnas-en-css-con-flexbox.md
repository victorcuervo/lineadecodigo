---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5XL7UC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDG1ItvAxKgxsxXApiw%2FSrZg94A0DTphedjMOB9fw0HVAiEA8SeLjLfomDhZz%2FsXiRRxSf1E9wI%2BPExSKxWmq49xzKYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMochXofU4rvix%2B4MCrcA1KaoibIVFuvRcsUiALdSpHN4jpqE8CIntEivz%2BtgRiedbehSvZf0ZBi82InDjY76ZJvgpphsZ6HDfMVyRz%2B4K8YvnWgIfTOzSVEAJiEJSI4B%2B0SbQP%2BkCMFF1Q3p3oby8AEGfhQqIdl4BqlrEh3odmSVEnUwYRGlwj9ULeo4wetHu2nF60Ir9X4AZHv2wzj8MzbveX8MqCMfeLaWEcBV%2F%2FF65OfLFJjY6HP3vCgfnS9zyjHFoxiqun3O5gOAzEkuyaa8DyxJ3k%2FAP7%2FjgCo7cYaGFc47wDiBsMtdJnmxbKzESa4uDvqH9qKokAojHeDkjI16le26XRnOxgdYanrLbGCkKnNcOhI9ORcRDmK8EMACSjyST0ObXmihG69Q3fh%2B9tk8TovPBR%2Fny1gGVy9PjVB%2FHsUvAWses1d1%2BFCpAwTFPg%2BOhb%2BemaYMBaD%2FMVtgrSRNTDfj7tKctXIMiYj0mA%2BepT8CUUEmhdvtxT7C1sUCqAE4hBPuE%2Bpcr7XNd16lZRt5kNirZy8yAe99C20jJF5ss5O0STPOu0ilBsPlY8F8xQZB6Ij67N4LQQmShEL7ngNHcsRzIfz5e2nVl4AJ0wnWqPS59Uxgd3YDrU21L%2FODxIn1FmXlT%2BiAz3tML%2F90skGOqUBmeU1ccYB5gakIPVZdhHoqkzL81l08A%2BXTG7NVHpHD%2F5NYwBuAdHEYzQv69e51KKav0vEG3ACS0nej0CchOuH1ZA%2BgoRcbY3gMrwkNx9kyatVYW2Juj%2FCYAoOHamF0FOPxT%2BWjwp%2BybGjruHJlS%2B7NsBm2fFr8X7Ukma3WbD9vv6QvfnWKovfbCzEE4J0n4Eg7GsREknoKGhv%2Fww9QSjAaFowXQCV&X-Amz-Signature=232a8fe61cdc50223c86f46e6ca3684b05f36161f3a053c778256d9ce4f7c100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5XL7UC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDG1ItvAxKgxsxXApiw%2FSrZg94A0DTphedjMOB9fw0HVAiEA8SeLjLfomDhZz%2FsXiRRxSf1E9wI%2BPExSKxWmq49xzKYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMochXofU4rvix%2B4MCrcA1KaoibIVFuvRcsUiALdSpHN4jpqE8CIntEivz%2BtgRiedbehSvZf0ZBi82InDjY76ZJvgpphsZ6HDfMVyRz%2B4K8YvnWgIfTOzSVEAJiEJSI4B%2B0SbQP%2BkCMFF1Q3p3oby8AEGfhQqIdl4BqlrEh3odmSVEnUwYRGlwj9ULeo4wetHu2nF60Ir9X4AZHv2wzj8MzbveX8MqCMfeLaWEcBV%2F%2FF65OfLFJjY6HP3vCgfnS9zyjHFoxiqun3O5gOAzEkuyaa8DyxJ3k%2FAP7%2FjgCo7cYaGFc47wDiBsMtdJnmxbKzESa4uDvqH9qKokAojHeDkjI16le26XRnOxgdYanrLbGCkKnNcOhI9ORcRDmK8EMACSjyST0ObXmihG69Q3fh%2B9tk8TovPBR%2Fny1gGVy9PjVB%2FHsUvAWses1d1%2BFCpAwTFPg%2BOhb%2BemaYMBaD%2FMVtgrSRNTDfj7tKctXIMiYj0mA%2BepT8CUUEmhdvtxT7C1sUCqAE4hBPuE%2Bpcr7XNd16lZRt5kNirZy8yAe99C20jJF5ss5O0STPOu0ilBsPlY8F8xQZB6Ij67N4LQQmShEL7ngNHcsRzIfz5e2nVl4AJ0wnWqPS59Uxgd3YDrU21L%2FODxIn1FmXlT%2BiAz3tML%2F90skGOqUBmeU1ccYB5gakIPVZdhHoqkzL81l08A%2BXTG7NVHpHD%2F5NYwBuAdHEYzQv69e51KKav0vEG3ACS0nej0CchOuH1ZA%2BgoRcbY3gMrwkNx9kyatVYW2Juj%2FCYAoOHamF0FOPxT%2BWjwp%2BybGjruHJlS%2B7NsBm2fFr8X7Ukma3WbD9vv6QvfnWKovfbCzEE4J0n4Eg7GsREknoKGhv%2Fww9QSjAaFowXQCV&X-Amz-Signature=9520e5c896783ec6b7effc1b59b72b4ec31d9b366324fc08765dddbe0e407c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

