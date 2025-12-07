---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CWH7TDH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA8%2B7qlIfQvNZPoxZ2jvRXb%2FNOGRRkxfF2Pi5LKTTA4gIhAJv3lhK1t5ZvdhXZ7GZoqLiRuSvmNouMtBnZTMyoOc1wKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8RzgRNJQhZ1aZVJAq3AOcGS%2FGmxlsi5ebYvBO0I1IxL9ycxJ1Pw3LZgPPpYoHy4aeeadBIHbHtcCL8e50K%2FT%2BZvSFNNvAF9A%2FU4hRk2WOrulOUtE90JtT4%2FFXF2AXFB73haqEvupkQI%2BjNZ1I%2F4kLwujMhjtk9Z118Jgi7a0wXJQNHyfp1LxMtRU565ZPUTKtjw%2F9meLJ4RZqUrMHPnJ5w48M%2BLbRt6EL%2BY%2FU2tDf66oxqHpsMp%2BTlJq%2F9iqWOKp2P8H04NC3Mu0usYG2zJS5%2Ff7rOtT7ahmyr%2Bi7rEkjXThCf18FJaKGvjR0DamctCLHpa4hQ%2BvNxlGUDne4xTwBEyjUOYRgn6meM58QKs0xTtFG0eG3X9rfTdmZjhMc37ekxSye6WLxH2evA3dYEamSyyIj0ADkRKSORcTumxOxxLxPg3GbKphHYD44mWM3pJwtW%2BhoRSjsCb5lXUud%2BowiC7vlGhx934yTmN%2Fl3qKyBmWIJE5pYBNk8HMRufZIGaAh704Iko5e%2FwHMEJ812wsv%2By8CYMbZH8dnmMrHDtAIn7Ln%2BvAlN5RmWbE%2F7uuqwUNqeK%2FqnaUeutOgnPf83ph%2FcWz7Ra7Xv9qotBcKnlXRT1oKVXIvVKoSlSvhQZjbp%2B0zexY7UbfShS0HnzDKmtXJBjqkAcuuQkZQ9FpovolMEaGxKDbRhdWAaoTqTnxCgukFPuUVJ5H0uGNEMOx4TfcFgi3BGCND8CJQgPw6jMYKy7sely7T%2B%2BKcgROyLkuAUOBuP%2Be7kqK3uNckLgl46jaYqZJPEPN%2BiVbOxY3Zk7ge84TVff9kOlxI7rMJMtIVq7tmiFA8A2azA6ag%2Bu2euuu6k3BJuHhq2rjIgJ5FqxjOL32Z8fU2%2F7v3&X-Amz-Signature=d350f579e5e307356d3e9c68dedd107341a8cc6b33b11e2702f5cb8bbe4df631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CWH7TDH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA8%2B7qlIfQvNZPoxZ2jvRXb%2FNOGRRkxfF2Pi5LKTTA4gIhAJv3lhK1t5ZvdhXZ7GZoqLiRuSvmNouMtBnZTMyoOc1wKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8RzgRNJQhZ1aZVJAq3AOcGS%2FGmxlsi5ebYvBO0I1IxL9ycxJ1Pw3LZgPPpYoHy4aeeadBIHbHtcCL8e50K%2FT%2BZvSFNNvAF9A%2FU4hRk2WOrulOUtE90JtT4%2FFXF2AXFB73haqEvupkQI%2BjNZ1I%2F4kLwujMhjtk9Z118Jgi7a0wXJQNHyfp1LxMtRU565ZPUTKtjw%2F9meLJ4RZqUrMHPnJ5w48M%2BLbRt6EL%2BY%2FU2tDf66oxqHpsMp%2BTlJq%2F9iqWOKp2P8H04NC3Mu0usYG2zJS5%2Ff7rOtT7ahmyr%2Bi7rEkjXThCf18FJaKGvjR0DamctCLHpa4hQ%2BvNxlGUDne4xTwBEyjUOYRgn6meM58QKs0xTtFG0eG3X9rfTdmZjhMc37ekxSye6WLxH2evA3dYEamSyyIj0ADkRKSORcTumxOxxLxPg3GbKphHYD44mWM3pJwtW%2BhoRSjsCb5lXUud%2BowiC7vlGhx934yTmN%2Fl3qKyBmWIJE5pYBNk8HMRufZIGaAh704Iko5e%2FwHMEJ812wsv%2By8CYMbZH8dnmMrHDtAIn7Ln%2BvAlN5RmWbE%2F7uuqwUNqeK%2FqnaUeutOgnPf83ph%2FcWz7Ra7Xv9qotBcKnlXRT1oKVXIvVKoSlSvhQZjbp%2B0zexY7UbfShS0HnzDKmtXJBjqkAcuuQkZQ9FpovolMEaGxKDbRhdWAaoTqTnxCgukFPuUVJ5H0uGNEMOx4TfcFgi3BGCND8CJQgPw6jMYKy7sely7T%2B%2BKcgROyLkuAUOBuP%2Be7kqK3uNckLgl46jaYqZJPEPN%2BiVbOxY3Zk7ge84TVff9kOlxI7rMJMtIVq7tmiFA8A2azA6ag%2Bu2euuu6k3BJuHhq2rjIgJ5FqxjOL32Z8fU2%2F7v3&X-Amz-Signature=fd9c29b115c0b940810d5e2959c20a78f3b8822f2ebc18e64c84ace7a90b1409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

