---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRTKVOX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJK4ImrZILzhhrm7FsIOCiM2LvRL6Y2OTulhUGDS1mlAiEA7k0wF4N2AC8LXWluYZc9lKHzlPlhkwJeo7umWbpXpYcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTembcOsDP5pJEh2CrcA9Qpguj1Puf6KebuFqQabU2HHnWaz984pGxRHEuooNvY2ANhW0TPjeUxQV7oA5o9kpA9Pq%2BNBMS2C%2BULdcg%2Bl6TC6ya9qvIviRVVuxquHnsbXzt5vTmObQb1mDxckSGBrYPIFiagBw3X91Ib1Qf%2Bx5z3ha%2FS8icJKQ5JroneA5dO8z70O0jhPjz0mEhmEObCCfxgxvgjhMsZ5wLFtG6rvY9BTB6e251DKNUWFKeTHIy7vVrgXMw2FO0UUS1qrSQ1ezTc0W6wg3aWXh4FcfRXhvAoPFop8mE7B9Q3q2bjUYUsvkxe5nh4r5OHd1rQHSrHI9PeG3itWWqUman1BMslko9OKB%2FQZl82XVYvjhTdv6Mkg3sc4ESEpFLx%2Fqr3yohky5%2FDJoyekXY9riZ3MrM0zf66etdSnmbxK8tCF5tVl0V%2FJHjyEndOu%2F8gWkpzBfqUtxPoVveUliQ%2BEasJLHeelq%2Bhj8aEHqRp6f01nIldFSjftiukEC9HIxSSh%2B0E5rCMORWSNiiCU829gchnVDkrj1Ac89B5%2F7vBz89wf8bEjkJvAc3baY1EmOgHWkuL%2FRMBKziLwuc94W1de9ooUVDywiSyisqa45K0XgjIMCIjh%2F%2FoT280e%2BqbLOnSF4ANMPXt2ckGOqUBFXpimU7tw%2BF0mcPzIJISt1f2pQE73NweTJKApCQ9qD68IhJFwHMIUdhIK99RHvdW39%2FSDzxYLZrOWT7vJmqjs2E8VoXlyQOHWS8M9z%2Fv4KteRqZJpjJgEgNQklFpsGpKHAippI4zdqMvVJ%2Bd%2FfRr3H8MhNTcJNpoc%2B3t8ZxxYLyA6WVJ0LZ5OLl3gGvJ3lhKVyCqqe68l2l2xu8Fj1vkEwvdJmTO&X-Amz-Signature=1b59985a892c540cf68e0f61860cfa634cdcd39e0f9e4a6f59fbbe59e38d2633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRTKVOX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJK4ImrZILzhhrm7FsIOCiM2LvRL6Y2OTulhUGDS1mlAiEA7k0wF4N2AC8LXWluYZc9lKHzlPlhkwJeo7umWbpXpYcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTembcOsDP5pJEh2CrcA9Qpguj1Puf6KebuFqQabU2HHnWaz984pGxRHEuooNvY2ANhW0TPjeUxQV7oA5o9kpA9Pq%2BNBMS2C%2BULdcg%2Bl6TC6ya9qvIviRVVuxquHnsbXzt5vTmObQb1mDxckSGBrYPIFiagBw3X91Ib1Qf%2Bx5z3ha%2FS8icJKQ5JroneA5dO8z70O0jhPjz0mEhmEObCCfxgxvgjhMsZ5wLFtG6rvY9BTB6e251DKNUWFKeTHIy7vVrgXMw2FO0UUS1qrSQ1ezTc0W6wg3aWXh4FcfRXhvAoPFop8mE7B9Q3q2bjUYUsvkxe5nh4r5OHd1rQHSrHI9PeG3itWWqUman1BMslko9OKB%2FQZl82XVYvjhTdv6Mkg3sc4ESEpFLx%2Fqr3yohky5%2FDJoyekXY9riZ3MrM0zf66etdSnmbxK8tCF5tVl0V%2FJHjyEndOu%2F8gWkpzBfqUtxPoVveUliQ%2BEasJLHeelq%2Bhj8aEHqRp6f01nIldFSjftiukEC9HIxSSh%2B0E5rCMORWSNiiCU829gchnVDkrj1Ac89B5%2F7vBz89wf8bEjkJvAc3baY1EmOgHWkuL%2FRMBKziLwuc94W1de9ooUVDywiSyisqa45K0XgjIMCIjh%2F%2FoT280e%2BqbLOnSF4ANMPXt2ckGOqUBFXpimU7tw%2BF0mcPzIJISt1f2pQE73NweTJKApCQ9qD68IhJFwHMIUdhIK99RHvdW39%2FSDzxYLZrOWT7vJmqjs2E8VoXlyQOHWS8M9z%2Fv4KteRqZJpjJgEgNQklFpsGpKHAippI4zdqMvVJ%2Bd%2FfRr3H8MhNTcJNpoc%2B3t8ZxxYLyA6WVJ0LZ5OLl3gGvJ3lhKVyCqqe68l2l2xu8Fj1vkEwvdJmTO&X-Amz-Signature=dee99552cbde3b9b3aef9d2cfe193f0227bfd15720703344c8893bfd27fa6c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

