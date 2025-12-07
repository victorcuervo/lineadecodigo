---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMARE2PQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7BU5PEucqLVLklHc90pqyFB%2FMCBJFBzJjQGSmbzLXPAiEApspWA7N26ENE1wqxjLKxfN9N7ZpMR3QpVvUkHz4r1PIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOs3tBb5yogoHYFhUSrcAy%2FDDnqcaRk29I8JXBsWu9hSAlhVpdMu9MUu96STSBbhEmWmqObjj1%2FzW6lHGtwBF5I6hsCNxmjJAFg8nMD5AamXEK0XNv4BH22MOtb27%2FEU1AHXo4rGjUif6ygS79aXTsspXHQEQ4W3K34kTEGBfucBNS3feIR20ACcEe1XWMy2MQ5Q9j%2FfoqvhC1u4ODWBtyDMffqP8VW9NJsbRmjbtaGmLnJg7NZ0f08IvQ%2BApVtjurC4UMfo5MvWkV9yilWv9yw49iadw9GmLjX%2BIYzGL6lh5m1RgWpMZdIIRpTloCF4Jk51TNviy8v%2B57zxh6Eomi2h8J1dIALiyo0JgCTuUNJwiFcoU0C8uwwaocnngf16rPcilh7wjyp1T1OTtIiUelmEDE4ncVlddaxJ1bZYEA0M5k8smH4YqIq91ZcpuMhGIPpeOW9pAoV9pRiAR%2FZk0PUx0edLKWOCSlZT6gT%2BPcF4UJmPrBSobKO%2FBymZ%2FtWM%2BaNL2goUBG4aoR5AF%2FAfT7zlWQJMhlOceXxphuPADjM4v%2ByvjIG72lH%2BmGAmD26s05HI1ID8yQQ2ccu2hXd15k2uGcULn%2FrwjAehWTlDyKMmNbaMSmHlRVSh1X5LyyUxqwNNGG7XP7x6T4QVMIWo18kGOqUBjq19LskG8tVvX0uJq888QqqIuB2CDPAx5I5mseAw1EcWV5p1T4NpWD1yP1%2BfgJQ395GQtvJzBbXxdaaGd5e0RKX%2F5W1IY0zCooFPhRQl2WhP3rUGmkVwBLKPWQkzfYE%2BOB8co3AqX7FqfdKe%2BLSYIOc6fY9uv2vfQ9OaXffYrDXb20zShX2gdgUB9tRez32ElatKIvgTfTfoBKdTtPBHO%2FrSax1X&X-Amz-Signature=b06da373b10a4265a3850cd62fb354147d52b866a6e127849303aaebb403a50b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMARE2PQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7BU5PEucqLVLklHc90pqyFB%2FMCBJFBzJjQGSmbzLXPAiEApspWA7N26ENE1wqxjLKxfN9N7ZpMR3QpVvUkHz4r1PIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOs3tBb5yogoHYFhUSrcAy%2FDDnqcaRk29I8JXBsWu9hSAlhVpdMu9MUu96STSBbhEmWmqObjj1%2FzW6lHGtwBF5I6hsCNxmjJAFg8nMD5AamXEK0XNv4BH22MOtb27%2FEU1AHXo4rGjUif6ygS79aXTsspXHQEQ4W3K34kTEGBfucBNS3feIR20ACcEe1XWMy2MQ5Q9j%2FfoqvhC1u4ODWBtyDMffqP8VW9NJsbRmjbtaGmLnJg7NZ0f08IvQ%2BApVtjurC4UMfo5MvWkV9yilWv9yw49iadw9GmLjX%2BIYzGL6lh5m1RgWpMZdIIRpTloCF4Jk51TNviy8v%2B57zxh6Eomi2h8J1dIALiyo0JgCTuUNJwiFcoU0C8uwwaocnngf16rPcilh7wjyp1T1OTtIiUelmEDE4ncVlddaxJ1bZYEA0M5k8smH4YqIq91ZcpuMhGIPpeOW9pAoV9pRiAR%2FZk0PUx0edLKWOCSlZT6gT%2BPcF4UJmPrBSobKO%2FBymZ%2FtWM%2BaNL2goUBG4aoR5AF%2FAfT7zlWQJMhlOceXxphuPADjM4v%2ByvjIG72lH%2BmGAmD26s05HI1ID8yQQ2ccu2hXd15k2uGcULn%2FrwjAehWTlDyKMmNbaMSmHlRVSh1X5LyyUxqwNNGG7XP7x6T4QVMIWo18kGOqUBjq19LskG8tVvX0uJq888QqqIuB2CDPAx5I5mseAw1EcWV5p1T4NpWD1yP1%2BfgJQ395GQtvJzBbXxdaaGd5e0RKX%2F5W1IY0zCooFPhRQl2WhP3rUGmkVwBLKPWQkzfYE%2BOB8co3AqX7FqfdKe%2BLSYIOc6fY9uv2vfQ9OaXffYrDXb20zShX2gdgUB9tRez32ElatKIvgTfTfoBKdTtPBHO%2FrSax1X&X-Amz-Signature=a1f1efbbe89b943a98c1c948fade82eaeba725f566942a14ffcfbbcb2315b97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

