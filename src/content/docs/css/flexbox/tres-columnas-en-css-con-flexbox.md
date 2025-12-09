---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ3RM6FD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv7UDg%2Ff%2FQHd9CWGIs8t3p1lZ8KKB34LSdxVRi67VrkQIhAJX408wUZKOaKXHPFXU86mPk6W2DnwO%2FILUsUBk7EL7TKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfMpmnwM2UMeQS%2Bfgq3AMttkjsRd8QMVeVfDDAog550Bj%2F6OcqsowyPVoxhvEVeqHA8rpRptV%2FiWwrNvlhKR8Jxt1mUDiC86StDl8gH19cKJKypd55vmBA6zezAkvoGmc%2B40%2FOqxDz6y7ss4LcIQKg7PdLb8F2VZY1Q4vy6ijbjCYX269kKqwarRGiCid50WQ9%2BSMTTtXd13meQZeJsbEIhtbNAZ3%2BY%2BfK%2BjSmOJWsRJfk8K0HWNi5LYOJ8jultAlh8fuA9VWw4HFtSPUCrxGp9ya1hLvYu4UXD8HgnV3XdBWEhY%2BB9M5bNvC8uMBIuOyb1XzVPIwP2BtCASmvslxsw3xLhS70G2n32JwaYi0RF8G3Rzl3sa75I493iN3%2F%2BUmGDO0FkPDdPCjibWBn4S5HQ6JugRg%2Fij6KK9h%2F6pi11UcUulzn%2FHUBMHtcwUyFhnw3EALaBTD8W9BMHWI76zujKdBLHY9h%2BIbST8Kp9gb0GpU8xLAujjMZU3d9N2z%2BAvZEGkFb2pWF0X1Yy4aD2ZExdL24GVGGCtXM5ozj9KbTiSCcPcBV%2Bw0U7u6chFbBYAd0TdQTJc1h7VOWzOfnfdO2gmRV7WbSmS7bSQFITaHlUo8MNP7Jt1wE1UJipmdqVav643SziUaMp%2F0kwTDdpN%2FJBjqkAXukpHuL9DwK8X65b%2Bl3SoQhH3i5CQo7C7hvR6TJ3cJm1611iGykGwL%2F6uT3rxup4MfuPwYtqmmP8t33CVzWZfc07lQ0xhKr5G1SGFimZ%2BFzM6MLziMlb3UdLxGrWnn2eJzjzY%2FhM75UC8Ob3WG3J9nCjVpjjis9WRlmNrayLx91R5%2FCNUSNN4ym69ludNHt2D5G8r4vvO8ROeX3KMcP1dvfjlhZ&X-Amz-Signature=358f0613b4bb49fd9a9e3d0048a8ab5752b7da8adc4008ee53247593cf6be9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ3RM6FD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv7UDg%2Ff%2FQHd9CWGIs8t3p1lZ8KKB34LSdxVRi67VrkQIhAJX408wUZKOaKXHPFXU86mPk6W2DnwO%2FILUsUBk7EL7TKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfMpmnwM2UMeQS%2Bfgq3AMttkjsRd8QMVeVfDDAog550Bj%2F6OcqsowyPVoxhvEVeqHA8rpRptV%2FiWwrNvlhKR8Jxt1mUDiC86StDl8gH19cKJKypd55vmBA6zezAkvoGmc%2B40%2FOqxDz6y7ss4LcIQKg7PdLb8F2VZY1Q4vy6ijbjCYX269kKqwarRGiCid50WQ9%2BSMTTtXd13meQZeJsbEIhtbNAZ3%2BY%2BfK%2BjSmOJWsRJfk8K0HWNi5LYOJ8jultAlh8fuA9VWw4HFtSPUCrxGp9ya1hLvYu4UXD8HgnV3XdBWEhY%2BB9M5bNvC8uMBIuOyb1XzVPIwP2BtCASmvslxsw3xLhS70G2n32JwaYi0RF8G3Rzl3sa75I493iN3%2F%2BUmGDO0FkPDdPCjibWBn4S5HQ6JugRg%2Fij6KK9h%2F6pi11UcUulzn%2FHUBMHtcwUyFhnw3EALaBTD8W9BMHWI76zujKdBLHY9h%2BIbST8Kp9gb0GpU8xLAujjMZU3d9N2z%2BAvZEGkFb2pWF0X1Yy4aD2ZExdL24GVGGCtXM5ozj9KbTiSCcPcBV%2Bw0U7u6chFbBYAd0TdQTJc1h7VOWzOfnfdO2gmRV7WbSmS7bSQFITaHlUo8MNP7Jt1wE1UJipmdqVav643SziUaMp%2F0kwTDdpN%2FJBjqkAXukpHuL9DwK8X65b%2Bl3SoQhH3i5CQo7C7hvR6TJ3cJm1611iGykGwL%2F6uT3rxup4MfuPwYtqmmP8t33CVzWZfc07lQ0xhKr5G1SGFimZ%2BFzM6MLziMlb3UdLxGrWnn2eJzjzY%2FhM75UC8Ob3WG3J9nCjVpjjis9WRlmNrayLx91R5%2FCNUSNN4ym69ludNHt2D5G8r4vvO8ROeX3KMcP1dvfjlhZ&X-Amz-Signature=40a3fe021789e069469fc2b17953a15daa4d24055419a6251334b24f964b23fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

