---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEEZUOX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGpJqX7U1E6Sq4Ys%2FvYOwY8LRkpPJNvjwOHHSpBF%2FqUbAiEAtGu2RYVwnZuzaoFYEPyHdujWK50jDeCzaqyB%2FzDr7j0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJVr1Yz9e9iZ8wXXZSrcAyL9bAA%2FMD9l3RhGppLhZ9L8AHkwuFkUa172MMTwgNDm%2B3I%2BNFzTvQjBq9cZtOCK4WIOSQyrx0XhGlcyWbDD2lVrg8i043Ud6HXzI1IakmuoUS%2FJarTktKwl9fvFRyE4qPE2A0abpBgP5rzbvlJtxEZBZRgi43vzJujX5c4SVYkkABSELD6PhSofV3gpDSHKTsq1CNV4j2Go31wwtHS5aWEBIN4kf0CA2NPdOogQVGimvtTNcB60m2wM0ozYqqLTTLCTYXBqK2APRrRLJMvc1wRdKq0Z2qU6XlfQwImJA8zhbnpXr0hFGrvW%2FS7KTyjiCjQP6qns8lsoBMu5k39O3CAizVFl%2FKBiXBfBhcej4RObyx1aawloGVKJcS1FXxQYn8nVbdHih8CIN2JQkr6n0lkd1u0c%2Ft2R5mrKZlP%2BJKFFtDtEm4zpN20rHMsk%2FjPjDK%2FrLzsV6fG405ymUEX22s78nQQSdcs3gpvUkesxf35WPvZmJnp6cu%2FUEBc%2FwQpNlCedgeKOWuqvbbRDZrORY%2FD%2BphlqY2%2BTjPqakjuI8TuJ4H1Qrzk%2FLvX%2FdqcKNgvvSESjU0rqH2GZjCE3ITsdxXIbkPVsPGX5idKYgyiKFaHPjk6aOB6GrL6Wy3iUMJ6GxckGOqUBC80qHt0dgX1z320IPDco5Y14rj6t1gw5GhwTqIT6gXs%2FF0d2Vk8tBYN47%2BhpyIURdBqhdkx0wRyanWzTQZTH5KL%2Ft3r%2BWJIcfDqiJbBAySWN3FeiyJXi5%2BEdGyKZGdAsGiTe8qKjhVFBruTFWsfRzQRfk8BvSLQV%2FFRAyvLg4Ce7%2BZhG9vZ1MwPH5Tovj9JB0oUbPCqPtiTy%2FdrS9g%2FczZ0EfIaT&X-Amz-Signature=90bccb7e27715e398821558707987801ff7a1fa07cf55fd3cf38a3fe06bd0ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEEZUOX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGpJqX7U1E6Sq4Ys%2FvYOwY8LRkpPJNvjwOHHSpBF%2FqUbAiEAtGu2RYVwnZuzaoFYEPyHdujWK50jDeCzaqyB%2FzDr7j0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJVr1Yz9e9iZ8wXXZSrcAyL9bAA%2FMD9l3RhGppLhZ9L8AHkwuFkUa172MMTwgNDm%2B3I%2BNFzTvQjBq9cZtOCK4WIOSQyrx0XhGlcyWbDD2lVrg8i043Ud6HXzI1IakmuoUS%2FJarTktKwl9fvFRyE4qPE2A0abpBgP5rzbvlJtxEZBZRgi43vzJujX5c4SVYkkABSELD6PhSofV3gpDSHKTsq1CNV4j2Go31wwtHS5aWEBIN4kf0CA2NPdOogQVGimvtTNcB60m2wM0ozYqqLTTLCTYXBqK2APRrRLJMvc1wRdKq0Z2qU6XlfQwImJA8zhbnpXr0hFGrvW%2FS7KTyjiCjQP6qns8lsoBMu5k39O3CAizVFl%2FKBiXBfBhcej4RObyx1aawloGVKJcS1FXxQYn8nVbdHih8CIN2JQkr6n0lkd1u0c%2Ft2R5mrKZlP%2BJKFFtDtEm4zpN20rHMsk%2FjPjDK%2FrLzsV6fG405ymUEX22s78nQQSdcs3gpvUkesxf35WPvZmJnp6cu%2FUEBc%2FwQpNlCedgeKOWuqvbbRDZrORY%2FD%2BphlqY2%2BTjPqakjuI8TuJ4H1Qrzk%2FLvX%2FdqcKNgvvSESjU0rqH2GZjCE3ITsdxXIbkPVsPGX5idKYgyiKFaHPjk6aOB6GrL6Wy3iUMJ6GxckGOqUBC80qHt0dgX1z320IPDco5Y14rj6t1gw5GhwTqIT6gXs%2FF0d2Vk8tBYN47%2BhpyIURdBqhdkx0wRyanWzTQZTH5KL%2Ft3r%2BWJIcfDqiJbBAySWN3FeiyJXi5%2BEdGyKZGdAsGiTe8qKjhVFBruTFWsfRzQRfk8BvSLQV%2FFRAyvLg4Ce7%2BZhG9vZ1MwPH5Tovj9JB0oUbPCqPtiTy%2FdrS9g%2FczZ0EfIaT&X-Amz-Signature=d510ea864e98d0d4ab71a19badbbbfe88f8acdf2da90324da795975c9f308059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

