---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPLOAHQZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlNmg7OJrnPaPTvDeKGBCW696%2F9uCd6Vd3pVBAGZZTIAiBxhZ1sZJ58S%2F8ftW5EZZhPz882WXsyQhNrI2FVAfIgaCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGV6SuIozTkTjyu7aKtwDsN4QmcwxRxkPpvK%2B7K5UKwCzx528dC%2Fw5BtKdGNxrYXbyKVZROaGvgjQ7kMq4jDOZhBPFhD6Rsrt3Je64mu0rWYpqj8Z11kxAGv2MurPZTVg7yWWZwrmMqYfIrlbdzP%2BVvLCSulw%2FWvVtmQDEKTpx5NnSn3BEoEEiRtve7uAxwVgmcjhzG7DaMOSNjg%2BDtNibg%2BhL5Zi70FK5pweoJsOsj9lvTk8Un5Sryr%2FBKzusAWMOcQYjdXBnH7RiBszw75aPd0J7KXV21FAAEgbOF5%2FEw0tYiMuXWsJNWgLJbTu2IcFBL9kOldV8%2F1WYav6422ZWtL0EF5FapYx7JQXhmgoqAu2ozN3CI95B5X%2BzZFmkmYBaw1jKglPXN5xz1YXAytJXUJ7uOGVRpZnB6eDl76ge8bYfPqEnp53D1TUWv%2BYK17e7X3kliUwqma5xrtOJY3wcRmgYGNgDZ8ezKkUzLgEIBdqhpFvFJ%2FZsVIyrMBFBiZObFUB1K1Vz5gixHSmIzPxeGpw0hCkacTTHLSgqb%2Fo8iaTzOgcSKeiyr%2F6yAKB9gau14H88Hq6AXBBXaEI6tqnlD%2B5Voc7dddZK0hBo9E0fWG6RveZhn14mHQhl9zKcaph02h8fqv%2BFM784s8w%2BOzZyQY6pgF1UwuYgQhjcb0abms5dEOsniUCmJmzGSMuF63Yzi4RGhjjZ5QOjb6lxS8t6w56916DKzPCj6%2F0rXaGVMB4nFjPqo9mEsnmwA4SQkP1V%2BRwohheYf1y%2Fpig3iT53TnI9zA90OzpshNe%2FiRbfLzaJ0DXemOX9y28XjI8NRKD4LhT2%2BmWu9%2Fb2w6WEMvjb0EIqZ5xRNVKJEqMszV%2BRSrYSZKLvf7m38SJ&X-Amz-Signature=0a1c5dea48e0e97a44b891f3cb27b3d77e299a0882e752a59b4dea49757d1ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPLOAHQZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlNmg7OJrnPaPTvDeKGBCW696%2F9uCd6Vd3pVBAGZZTIAiBxhZ1sZJ58S%2F8ftW5EZZhPz882WXsyQhNrI2FVAfIgaCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGV6SuIozTkTjyu7aKtwDsN4QmcwxRxkPpvK%2B7K5UKwCzx528dC%2Fw5BtKdGNxrYXbyKVZROaGvgjQ7kMq4jDOZhBPFhD6Rsrt3Je64mu0rWYpqj8Z11kxAGv2MurPZTVg7yWWZwrmMqYfIrlbdzP%2BVvLCSulw%2FWvVtmQDEKTpx5NnSn3BEoEEiRtve7uAxwVgmcjhzG7DaMOSNjg%2BDtNibg%2BhL5Zi70FK5pweoJsOsj9lvTk8Un5Sryr%2FBKzusAWMOcQYjdXBnH7RiBszw75aPd0J7KXV21FAAEgbOF5%2FEw0tYiMuXWsJNWgLJbTu2IcFBL9kOldV8%2F1WYav6422ZWtL0EF5FapYx7JQXhmgoqAu2ozN3CI95B5X%2BzZFmkmYBaw1jKglPXN5xz1YXAytJXUJ7uOGVRpZnB6eDl76ge8bYfPqEnp53D1TUWv%2BYK17e7X3kliUwqma5xrtOJY3wcRmgYGNgDZ8ezKkUzLgEIBdqhpFvFJ%2FZsVIyrMBFBiZObFUB1K1Vz5gixHSmIzPxeGpw0hCkacTTHLSgqb%2Fo8iaTzOgcSKeiyr%2F6yAKB9gau14H88Hq6AXBBXaEI6tqnlD%2B5Voc7dddZK0hBo9E0fWG6RveZhn14mHQhl9zKcaph02h8fqv%2BFM784s8w%2BOzZyQY6pgF1UwuYgQhjcb0abms5dEOsniUCmJmzGSMuF63Yzi4RGhjjZ5QOjb6lxS8t6w56916DKzPCj6%2F0rXaGVMB4nFjPqo9mEsnmwA4SQkP1V%2BRwohheYf1y%2Fpig3iT53TnI9zA90OzpshNe%2FiRbfLzaJ0DXemOX9y28XjI8NRKD4LhT2%2BmWu9%2Fb2w6WEMvjb0EIqZ5xRNVKJEqMszV%2BRSrYSZKLvf7m38SJ&X-Amz-Signature=8b9b4a5159092076db2beb35cfded8a641b3c6b6917d57fca6f0069fae4343c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

