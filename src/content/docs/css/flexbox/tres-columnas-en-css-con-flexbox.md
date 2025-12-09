---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOCMIQH7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjp36moQK8EWwfhJ%2FgdtbPsoz%2BRMDIBcLVnqjDQXYW6AiEAiJdd6n9zyA2puXl7%2FBQDPy1EpOpd1tvs54e52SaxZkQqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdJ%2B3yZ6fSv79PxCyrcA%2Bmd0mIJyQ2%2FKR87etSNA6fE%2FGtCxX%2BCOspsg7ZkdTsoeDW%2FqUt1OPJj%2Fsu%2BBdL1ionML23gfcjew4w5uQZ4%2BOgFzQFUdFrfqEdbw968Bur2dBTrN%2BSojG8eEWDF5BUzb5eXi74%2BM1e2S%2BdcoPsa3dxVkaDzEOPkBmj3mBrbYdMKbwTi3pLGUExhJU1fDLiCvZIvFtG8POVsbf9UKZ3FwWZTebFLawPF6CzA8miglyqW%2BD%2FDLUaj4COHnmQNA0Q6fHC%2BuZkn8IRognbKkEKGslF%2BS2zRhlX8B9GXfy16i5lBRcmAMt9oTibVTPVt2l%2FE3nfmI9OhxhvdWU%2BRrO%2FbGRtbXwEgGQsy5o56U9mxTqrGX4LYOxern2xMAqZnE4OzKj4nR5lSIwbVCw5RSjHyMc64vnJNuy1oYAd26%2FlAMATrfMuzSkGK%2B3D68JoRqL%2F5Hz4g76L0M60BJjGeqg7gOV6R%2FK2uDGaEgMaCt4l3NZri%2BFnIJ7XHK%2Bq5Y27SPBxQgbeP4%2BnT5z4d%2BMES5n05yEiqf1ElaZq0m6ynmNI7hHSwo%2Ba8YITMsUYeeLZwnp6diGWXfNzXYEjEZ6xl%2F%2FQZGWXoH7oIxCuOB49tZYVKYi%2FdcalcNj1JE5g7cvkmMLTC3ckGOqUB3KtOqhmUaCNNgF5%2B1gzUCOa2ozL75rMR4kMSWF8MqkdwNP%2BKbuV1U4blNDcavtmgujJgiNE6XNNGt3uGQNv6R0bAWs3G4%2FjDJVcTOPaqn%2BHk2NHsMAvfmO5giJkGb0dTV%2FwAdbBcQKZxs%2B5mulcAwXeIc20QCHzAJF9MAJxBTClOhQl0QZGJzwfYOLLgu7%2FM9wvobKvDamj2DiGVwbE5B66nLC3q&X-Amz-Signature=2cebe2d27130c2a51f26535586e03c2d576777487c3a7321998a4dc6263aa593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOCMIQH7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjp36moQK8EWwfhJ%2FgdtbPsoz%2BRMDIBcLVnqjDQXYW6AiEAiJdd6n9zyA2puXl7%2FBQDPy1EpOpd1tvs54e52SaxZkQqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdJ%2B3yZ6fSv79PxCyrcA%2Bmd0mIJyQ2%2FKR87etSNA6fE%2FGtCxX%2BCOspsg7ZkdTsoeDW%2FqUt1OPJj%2Fsu%2BBdL1ionML23gfcjew4w5uQZ4%2BOgFzQFUdFrfqEdbw968Bur2dBTrN%2BSojG8eEWDF5BUzb5eXi74%2BM1e2S%2BdcoPsa3dxVkaDzEOPkBmj3mBrbYdMKbwTi3pLGUExhJU1fDLiCvZIvFtG8POVsbf9UKZ3FwWZTebFLawPF6CzA8miglyqW%2BD%2FDLUaj4COHnmQNA0Q6fHC%2BuZkn8IRognbKkEKGslF%2BS2zRhlX8B9GXfy16i5lBRcmAMt9oTibVTPVt2l%2FE3nfmI9OhxhvdWU%2BRrO%2FbGRtbXwEgGQsy5o56U9mxTqrGX4LYOxern2xMAqZnE4OzKj4nR5lSIwbVCw5RSjHyMc64vnJNuy1oYAd26%2FlAMATrfMuzSkGK%2B3D68JoRqL%2F5Hz4g76L0M60BJjGeqg7gOV6R%2FK2uDGaEgMaCt4l3NZri%2BFnIJ7XHK%2Bq5Y27SPBxQgbeP4%2BnT5z4d%2BMES5n05yEiqf1ElaZq0m6ynmNI7hHSwo%2Ba8YITMsUYeeLZwnp6diGWXfNzXYEjEZ6xl%2F%2FQZGWXoH7oIxCuOB49tZYVKYi%2FdcalcNj1JE5g7cvkmMLTC3ckGOqUB3KtOqhmUaCNNgF5%2B1gzUCOa2ozL75rMR4kMSWF8MqkdwNP%2BKbuV1U4blNDcavtmgujJgiNE6XNNGt3uGQNv6R0bAWs3G4%2FjDJVcTOPaqn%2BHk2NHsMAvfmO5giJkGb0dTV%2FwAdbBcQKZxs%2B5mulcAwXeIc20QCHzAJF9MAJxBTClOhQl0QZGJzwfYOLLgu7%2FM9wvobKvDamj2DiGVwbE5B66nLC3q&X-Amz-Signature=4cca6704111a2b3c3ea8277b3926af84d76e21275f9a99dfcd0e863d34c751e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

