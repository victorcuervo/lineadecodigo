---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3EJDIG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArTm%2FuD2d78lkMkldD0BYK9qfKHhAn%2FIrHcj1yRTAsTAiEA3iX3OL4%2Fyoq4i8Vd2rGaaG3P50my2bUQQ5WYt83QCKYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq%2Bnkg7TZoQQ9kivCrcA2UK12lhKrR83cC40%2F2mlkVUNcFUS%2F%2FWl0JYp1%2FONBnW9czc8vzzCQbT5KPTgIj9INej5%2Fl7Hi1iO43AIcbcs30PM5IBZhh2yuB%2BNlNW%2B%2BiMhpvJUWRVQHG07HrcidmKAeqBjOiy8%2BfPchGrhd%2B1XAdDvVlLS0%2Fc3pONsoMbgKv7Ctihlo6hqtmB98oO66PVYnqoxk49McUFKnVMsG6tP3NFBOLmU7IFbngJV7kidq80CLlUQkDAnvalymbkiml%2B6Nr7LYqZWoaoSr5YWrrzwUS%2FQUUSSPTwaiJjQEql%2FWYqRc62QYWRd%2F7SNgJwgS6E62ZxlQrejeet2nAtpdWtom1YX0g5CrgJZOnCCiq6HgWA210NTP8ZM2GqtuLw4iP3hY8piOel9JJzqUs%2Fd349wgcfDnAH8hTMFntwevX6YxK74ertn5Tvr1V95P2xTtJpUuJV1LaT8yihLSzoZQbBaZgBWtwcjo4gnBP%2Ft97AlYA7rUB5W7ydXs6mZL14f%2Bx47nd2yX387IeurCrFN7K7NrzzPnqoo52lnMTcuhulyM5HZCgfsvdvT68I6LbnBo%2BSn%2FdJq32Fc9EPB7mL10Z7JCET9HjU5DP8QyeiH0euKNSwBNg99rgrgFBv3J0pMPq11skGOqUB1kUjpCxZpOARDN6NzEHAJeuvdME7ci6gSfqT5j3haSkIimpnvEdY2Levs%2B%2Fqim6Sf0UtHX5Txec5i0aUC0%2FJ%2FhJBa9azZBKZiqTwHEnSgE59a652vsQChEB%2B%2BkCaUGMBDqA6fLdXSWOmleX9m62oCuVS%2BTr2rj2ehco5WzGtiOO8%2B%2BddyEjMCY38CjNYmW9kni%2F65Kimy%2BHRktAtkGqjYAichJ3D&X-Amz-Signature=e1ae1c06330c1a7ae445f92ba114ea1b522d791e51bbb8c0dba93cc366392e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3EJDIG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArTm%2FuD2d78lkMkldD0BYK9qfKHhAn%2FIrHcj1yRTAsTAiEA3iX3OL4%2Fyoq4i8Vd2rGaaG3P50my2bUQQ5WYt83QCKYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq%2Bnkg7TZoQQ9kivCrcA2UK12lhKrR83cC40%2F2mlkVUNcFUS%2F%2FWl0JYp1%2FONBnW9czc8vzzCQbT5KPTgIj9INej5%2Fl7Hi1iO43AIcbcs30PM5IBZhh2yuB%2BNlNW%2B%2BiMhpvJUWRVQHG07HrcidmKAeqBjOiy8%2BfPchGrhd%2B1XAdDvVlLS0%2Fc3pONsoMbgKv7Ctihlo6hqtmB98oO66PVYnqoxk49McUFKnVMsG6tP3NFBOLmU7IFbngJV7kidq80CLlUQkDAnvalymbkiml%2B6Nr7LYqZWoaoSr5YWrrzwUS%2FQUUSSPTwaiJjQEql%2FWYqRc62QYWRd%2F7SNgJwgS6E62ZxlQrejeet2nAtpdWtom1YX0g5CrgJZOnCCiq6HgWA210NTP8ZM2GqtuLw4iP3hY8piOel9JJzqUs%2Fd349wgcfDnAH8hTMFntwevX6YxK74ertn5Tvr1V95P2xTtJpUuJV1LaT8yihLSzoZQbBaZgBWtwcjo4gnBP%2Ft97AlYA7rUB5W7ydXs6mZL14f%2Bx47nd2yX387IeurCrFN7K7NrzzPnqoo52lnMTcuhulyM5HZCgfsvdvT68I6LbnBo%2BSn%2FdJq32Fc9EPB7mL10Z7JCET9HjU5DP8QyeiH0euKNSwBNg99rgrgFBv3J0pMPq11skGOqUB1kUjpCxZpOARDN6NzEHAJeuvdME7ci6gSfqT5j3haSkIimpnvEdY2Levs%2B%2Fqim6Sf0UtHX5Txec5i0aUC0%2FJ%2FhJBa9azZBKZiqTwHEnSgE59a652vsQChEB%2B%2BkCaUGMBDqA6fLdXSWOmleX9m62oCuVS%2BTr2rj2ehco5WzGtiOO8%2B%2BddyEjMCY38CjNYmW9kni%2F65Kimy%2BHRktAtkGqjYAichJ3D&X-Amz-Signature=f680349129319852249309a8df97a016e2d08b80a69306dfb41b739880b44b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

