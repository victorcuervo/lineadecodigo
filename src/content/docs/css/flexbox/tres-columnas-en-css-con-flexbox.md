---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTALVCH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6qeiQnQW6pWYYpOhgeLE7eAof5ebmvMgwZRxxwmSL4AiEA%2BqejvtnPl2E7ffdkgv76dfhRF5BGrxqbOr0F8lg8sGoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp8%2BGCrlISSjYCBkSrcA9TszWZma1iWVDRO9phmDIgF79b4gyRC22JHXkInPWS%2BTtEelKAzvhKZIr68etSySpNUlAkaxtIWXckBqPvAkUfsgOM%2BUa37udx8nssCDXzSg%2BK%2BrVjOS0ZsDFnJTzuYXy6jJbqTeRsIzk6mqKB%2B9n4MlOxGA4N9O%2FakOFlWkOxviCLfH%2FjOKPdOj0h3loFDX5Ra7WXbFhclnc9kP2G8Ro3PO29LsMlYCZ3NzR3lQMW%2BE8zYXugLjvfKNCIKDnapZFLQ0z2dtjhgVcajS2rLGFQOtnedRVMXjp0x24npH0r%2BtoVNj2huQFsd1OHqKMZtldTzmMQh1BkYrdsxZyxVeWFg5Yt8OUPt%2BWS91PMuH5GQuZJ1xngzSZVUM7U3h1O1vZWP98iEmGJiPn5rkdxznFQQkvjQBO5MsbMXTRmAlgthoWhksQBBglzMHWNFHMNZHZeAxqGgPeXB2KGWp%2BchO3XbxKBySrMfUX4VDq%2Bbxa3RYOeTXq%2BiD1ly1hlPn56kGdQoC7zaSMg7Yotf1QMX8P3MbcWg7cLQG3K%2BWUJP0%2FCmd8xjZ3i52aTgB%2ByJwZbbczkxRs9nntA0gGI%2BfIHJwPWdeSRen51uzmXYO%2FDMku%2FsJNUKUuPDF0zUYkwaMM6d1MkGOqUBacHhFqqgu0pT1tkMff2d7A425bznamiVm3ba5VtZ9kbolcN1dTwOIMDtguzKwJkQDwJns8nIyWjXX6EBZzUYQu1CFc1p4TYFMdwUGkUW%2BrnaxOeq6IuDuK4OIGQtrDOZ3cF4J%2FLrrfaucyuysp%2BOj6UfF3mMIinzgDF7VVMK99wOqIri0XcvpeGTQzTgqrH4LDZUWjmaP%2FgoexukLa78%2F%2FRYMKMX&X-Amz-Signature=9070b6bf3f4812452f77fe372b0fdda2f0e5bd5071d033ac0c69c67262b367eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTALVCH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6qeiQnQW6pWYYpOhgeLE7eAof5ebmvMgwZRxxwmSL4AiEA%2BqejvtnPl2E7ffdkgv76dfhRF5BGrxqbOr0F8lg8sGoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp8%2BGCrlISSjYCBkSrcA9TszWZma1iWVDRO9phmDIgF79b4gyRC22JHXkInPWS%2BTtEelKAzvhKZIr68etSySpNUlAkaxtIWXckBqPvAkUfsgOM%2BUa37udx8nssCDXzSg%2BK%2BrVjOS0ZsDFnJTzuYXy6jJbqTeRsIzk6mqKB%2B9n4MlOxGA4N9O%2FakOFlWkOxviCLfH%2FjOKPdOj0h3loFDX5Ra7WXbFhclnc9kP2G8Ro3PO29LsMlYCZ3NzR3lQMW%2BE8zYXugLjvfKNCIKDnapZFLQ0z2dtjhgVcajS2rLGFQOtnedRVMXjp0x24npH0r%2BtoVNj2huQFsd1OHqKMZtldTzmMQh1BkYrdsxZyxVeWFg5Yt8OUPt%2BWS91PMuH5GQuZJ1xngzSZVUM7U3h1O1vZWP98iEmGJiPn5rkdxznFQQkvjQBO5MsbMXTRmAlgthoWhksQBBglzMHWNFHMNZHZeAxqGgPeXB2KGWp%2BchO3XbxKBySrMfUX4VDq%2Bbxa3RYOeTXq%2BiD1ly1hlPn56kGdQoC7zaSMg7Yotf1QMX8P3MbcWg7cLQG3K%2BWUJP0%2FCmd8xjZ3i52aTgB%2ByJwZbbczkxRs9nntA0gGI%2BfIHJwPWdeSRen51uzmXYO%2FDMku%2FsJNUKUuPDF0zUYkwaMM6d1MkGOqUBacHhFqqgu0pT1tkMff2d7A425bznamiVm3ba5VtZ9kbolcN1dTwOIMDtguzKwJkQDwJns8nIyWjXX6EBZzUYQu1CFc1p4TYFMdwUGkUW%2BrnaxOeq6IuDuK4OIGQtrDOZ3cF4J%2FLrrfaucyuysp%2BOj6UfF3mMIinzgDF7VVMK99wOqIri0XcvpeGTQzTgqrH4LDZUWjmaP%2FgoexukLa78%2F%2FRYMKMX&X-Amz-Signature=e57e596080ecd2ab2936a65c041b011b1bfbb3425cb542675169dfc7c07f2084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

