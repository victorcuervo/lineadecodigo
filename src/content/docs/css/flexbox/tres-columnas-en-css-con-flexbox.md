---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMI4P2ZS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDtZjVMtLaof%2BSuBZeELi9De2qY7bB8rFtErWWZGUodJQIgcKeIkzGoWSzjvTstyFMXI9TEwgp85p2yN%2FxNSfPRcm8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDK4zURgPU%2FRg02m%2F2ircA8FXOmTRLqUrstoHFT2ZiMtn5Y2LV4OXkmFBZpHOMuTcIpNwdERpl2PkgpbsgSGeVwECpzvk0FSOps1r8yXGK9QHryo10eVLv2kqHEN7Aa9qtNoyXpKOqqZzLs4b%2B4c9lVMkfqAxdpjJdvT4qR8fWKhuAGCy6eIAU9yWU18cNwSgN4RO18qGB8ORZD5%2BgdsmKYpDQUlsQ7IAuMjOl9li9L5pFkcd0h%2FbYbrGzPHTRiRIJnHVx9vesP56YhClvuPaUGsjJbT%2Fr9K69DXa2PC%2FYPMrAjlDe3zwiU4%2F7tvLUxoHZJTJ84NJ7tKXmxsIM49MS61wbgM9jbT4RDXsx92XYtVnl1DDh3kjVdvnfeAyKg9m8dhLeU6YsxUVl%2Bm4AGoSaSAv6Xr%2B3hQNc0eLmCw622bjjhSPuJ4oxkbCGESjB0MPAMY8xbxMSQHmLBFq3RLS0DoWBR%2B2PnAsPcp2BVyLqqGpp8bMeF7mAYB5z7CoT3WFVTE%2FTgX%2BRzMZXomUkziYSOXJ6Oc5%2FYrpNA8bXv5RCKUlg7SW1uZoLrPB85RuiZNu1BqjlXQyEOcvxYEY9wFiQJUzN1r8b3bZD%2FJ2znqyJkSliGudhf5TF%2Ff9XgPnLGClYuE%2FqnJKxvmyszrcMPODxskGOqUBt6HpJIcCw2f7R7nWh0SCXGw%2BUMUjY2E8s8dSgz2u6mz7qbnhzyOKSXE5DGMEjPHjLOCffJzp2TyqzNuubkbWkWW0Vep7kCUb9ipAFDXQSm9Yn95m3ia%2FMrZpWGegnrMukt5r3jyeUWAt5z%2BQouiUrIQnvPnAWt22PsMtCc65zxoD0FsLizf0mlV%2Bl%2B4tu4XIZ%2FlwNIMONs54tj3HdAPs45z9L14t&X-Amz-Signature=a47a1c51e0ded398a95efaf983fcd97638968eaf5b3366c90e380b2b6e934f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMI4P2ZS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDtZjVMtLaof%2BSuBZeELi9De2qY7bB8rFtErWWZGUodJQIgcKeIkzGoWSzjvTstyFMXI9TEwgp85p2yN%2FxNSfPRcm8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDK4zURgPU%2FRg02m%2F2ircA8FXOmTRLqUrstoHFT2ZiMtn5Y2LV4OXkmFBZpHOMuTcIpNwdERpl2PkgpbsgSGeVwECpzvk0FSOps1r8yXGK9QHryo10eVLv2kqHEN7Aa9qtNoyXpKOqqZzLs4b%2B4c9lVMkfqAxdpjJdvT4qR8fWKhuAGCy6eIAU9yWU18cNwSgN4RO18qGB8ORZD5%2BgdsmKYpDQUlsQ7IAuMjOl9li9L5pFkcd0h%2FbYbrGzPHTRiRIJnHVx9vesP56YhClvuPaUGsjJbT%2Fr9K69DXa2PC%2FYPMrAjlDe3zwiU4%2F7tvLUxoHZJTJ84NJ7tKXmxsIM49MS61wbgM9jbT4RDXsx92XYtVnl1DDh3kjVdvnfeAyKg9m8dhLeU6YsxUVl%2Bm4AGoSaSAv6Xr%2B3hQNc0eLmCw622bjjhSPuJ4oxkbCGESjB0MPAMY8xbxMSQHmLBFq3RLS0DoWBR%2B2PnAsPcp2BVyLqqGpp8bMeF7mAYB5z7CoT3WFVTE%2FTgX%2BRzMZXomUkziYSOXJ6Oc5%2FYrpNA8bXv5RCKUlg7SW1uZoLrPB85RuiZNu1BqjlXQyEOcvxYEY9wFiQJUzN1r8b3bZD%2FJ2znqyJkSliGudhf5TF%2Ff9XgPnLGClYuE%2FqnJKxvmyszrcMPODxskGOqUBt6HpJIcCw2f7R7nWh0SCXGw%2BUMUjY2E8s8dSgz2u6mz7qbnhzyOKSXE5DGMEjPHjLOCffJzp2TyqzNuubkbWkWW0Vep7kCUb9ipAFDXQSm9Yn95m3ia%2FMrZpWGegnrMukt5r3jyeUWAt5z%2BQouiUrIQnvPnAWt22PsMtCc65zxoD0FsLizf0mlV%2Bl%2B4tu4XIZ%2FlwNIMONs54tj3HdAPs45z9L14t&X-Amz-Signature=61c4523daea255abb95c30f085a50316f94f400a06158824e70025b7b81a11f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

