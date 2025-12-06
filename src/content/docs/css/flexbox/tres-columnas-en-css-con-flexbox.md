---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHUYXF7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ6GKdR%2B44nH%2B0LoSFgcbyuwB8bqMMftqoqygBDtNhmgIgVcDPrZU2PvG%2Fc2gnzNDcH6wSdRxACgURHM3yvgs1kmAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJoLBS84Q%2Fbn5f334yrcA8ET9o0OLUfzgXMeh%2Ftzy%2BQvia10RL4dZACr5GwB4tx2SQevUlXpje4RYeqLGHcSr46JGtJVbYgRV6txZKVucMAjsdyMd39a37PjXAdPPUlzfYPFGWwqjtEa9FkyluiOd7s5dAInXAL7YbMClIHh63W8fk9ECwPhb2dFVo2frvbLaOW5Pejz4PXNFMF0Bl0feEOXcv2mO4Q8s%2Fpawv7qJeBmXLcIqhAF9GhrMSdHiVWC5T44fbMwOHXU7Uok2KHRXkxZ8tLE9KtYk4%2BAaCEGO1CUS2DM6phGXyUfoHxvUnvOHu%2BIcC%2FSVWnACqS19D%2FM%2BijktkmL6mD7nf%2FeHs%2FgTMPArEQLo4knG%2F%2BDm%2BhzSz%2BwAXKEUpR75JD0Rauq3fDDyTpWRG6Q7thNsV6a%2BP10LBH95p7HjG1omrC7sEHIN2DhkvSF5gjrZ1WAAPTcLcPSZqWWMYqwUFYY5%2Bhy%2FPoB5F1j7FHHKLan4d19IMh73nFN24wGdHMJ7%2Fz2WycYe%2BXoh4YrlI6Y5Owm5ZzGY36dsQWZ67v7rvSc4x%2Bp9PtwVgX7mT%2FS7QLmTmUCuB9%2F3pXAe10PCkwFMes%2Fs%2BAqWOjpDTtModZ002NAvUb82iIlmHjzjyEa8RZNZwzowzLLMOnozckGOqUBS0NLUMlm7BtYQWh3DTB%2B%2Bw5hl%2FFXJNOcDWazRWk5gTrxuM7sD3t0XIyDmcKrHvk6fpK8oemZ17ZY6u7fejVOI3hvRMxDuQR0vGdbdQxYAMpLyCxqD6dnogVvU%2FDPxyO5fcNvw8NGmlq2QE6eeeSImWBkunIYtjlSKMEC5Iq8jOLwcVE5EDjcVpLP%2BN%2BlP%2Bx9k%2B9nADrXp6tk9ciFtxKphcgYvK6j&X-Amz-Signature=a4ce5e368405ecdd90646c24e3030c13fd3b707dbd7af508db30c5b41de58b63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHUYXF7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ6GKdR%2B44nH%2B0LoSFgcbyuwB8bqMMftqoqygBDtNhmgIgVcDPrZU2PvG%2Fc2gnzNDcH6wSdRxACgURHM3yvgs1kmAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJoLBS84Q%2Fbn5f334yrcA8ET9o0OLUfzgXMeh%2Ftzy%2BQvia10RL4dZACr5GwB4tx2SQevUlXpje4RYeqLGHcSr46JGtJVbYgRV6txZKVucMAjsdyMd39a37PjXAdPPUlzfYPFGWwqjtEa9FkyluiOd7s5dAInXAL7YbMClIHh63W8fk9ECwPhb2dFVo2frvbLaOW5Pejz4PXNFMF0Bl0feEOXcv2mO4Q8s%2Fpawv7qJeBmXLcIqhAF9GhrMSdHiVWC5T44fbMwOHXU7Uok2KHRXkxZ8tLE9KtYk4%2BAaCEGO1CUS2DM6phGXyUfoHxvUnvOHu%2BIcC%2FSVWnACqS19D%2FM%2BijktkmL6mD7nf%2FeHs%2FgTMPArEQLo4knG%2F%2BDm%2BhzSz%2BwAXKEUpR75JD0Rauq3fDDyTpWRG6Q7thNsV6a%2BP10LBH95p7HjG1omrC7sEHIN2DhkvSF5gjrZ1WAAPTcLcPSZqWWMYqwUFYY5%2Bhy%2FPoB5F1j7FHHKLan4d19IMh73nFN24wGdHMJ7%2Fz2WycYe%2BXoh4YrlI6Y5Owm5ZzGY36dsQWZ67v7rvSc4x%2Bp9PtwVgX7mT%2FS7QLmTmUCuB9%2F3pXAe10PCkwFMes%2Fs%2BAqWOjpDTtModZ002NAvUb82iIlmHjzjyEa8RZNZwzowzLLMOnozckGOqUBS0NLUMlm7BtYQWh3DTB%2B%2Bw5hl%2FFXJNOcDWazRWk5gTrxuM7sD3t0XIyDmcKrHvk6fpK8oemZ17ZY6u7fejVOI3hvRMxDuQR0vGdbdQxYAMpLyCxqD6dnogVvU%2FDPxyO5fcNvw8NGmlq2QE6eeeSImWBkunIYtjlSKMEC5Iq8jOLwcVE5EDjcVpLP%2BN%2BlP%2Bx9k%2B9nADrXp6tk9ciFtxKphcgYvK6j&X-Amz-Signature=91f643a394e9e4d895bd4d1dd1904a841dd4fec00a1f4e3f40db1e8103b1d856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

