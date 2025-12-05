---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2JQYO7X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwDaX8f5WmVaxMMEE%2FdHSMjpQyuDL5F%2BS2UvRDC6K9pAiA0C1iq5cJ7ooqjp2sSPZtxpfUztsOKB7pSFj2xBQ3NpCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMGEvz%2FjteWqRePnv%2FKtwDxk5ARQoVXBLpvwV0AMdELxfp6rymvSJ0mYSBCDrrTEXpJmRcRYAErpLviUZ8UVdl1NYPXMDk0FjddFJPEucwRAmw0zOTtqG1Dzfy3HuS9S7xpyyZKShivjiDrflO9HnFMHoZ3S%2F3BUZJ%2B%2Bk85lsd%2Fs6ZmxqVxkhfztgBGQ7iy%2FdoxyFv%2F4ZrSgBNOSpqaubmFicuAnz2YgnoxTivBFAK0y7KuWj6lUzpoG1IMpdMgPDnYpEfvNHR5PMO7RXu6elGSlV%2FQHmmqQjS8B19wH1xpko9TgZ1Hgt68tlbZSeShDmtyqTQJvw%2F6%2FesgIfo2a6f6mal6anTu%2FRldnDRHxau%2BxQhFY3axSC9Pes7KF73UDsjl7Y73bPjEvgpzljqFw1mHn9%2BukasvdixxbnQ9HJhEYvUOYbFerczSyZClSIazP4DtqxrapZM%2BZIOaQfjcGR3Zd9fiUn80laOnOPYH9gLgwkItIAoKjggMawGCZG5zEQiAcF1Tdsieul5iCvVxkr1vTgiAznc2pXaO6Hhd5l6LE3vWSMM4iNDSJKSUhrjoIIyE%2FiVnh%2F5%2Bh6OoijMxD%2BPneG1qMeaFjAdKMySIStQ23BlWXkVJdzw9aDT5aR0TE1vzVJJ3t6LFnQM3vkwlIzIyQY6pgHp4qGREjDUdgS5gXaCKnrT3XyYEelqn0SoWpAKCmT7Il%2BdSIXP1ZdpBFQypf8q1Vftk7LosT68qntNo1C63RBqz0lTmt%2FIbWxwoaM1V4XdHLyp2OTUglsGR8gX4ogCkTLfpJ7tD9yB97HETvB8LBiQUVimpKYW%2BHE%2FVX%2BLQmojB%2BG3I4TrXHIhXdpyt%2B2%2FRxLL85yNIXWKPsDhYDetuIMLTzFCADT8&X-Amz-Signature=2b115367fde710ee5a1a3004037d4f46a2547e90234f9729c8554b6ff1328653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2JQYO7X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwDaX8f5WmVaxMMEE%2FdHSMjpQyuDL5F%2BS2UvRDC6K9pAiA0C1iq5cJ7ooqjp2sSPZtxpfUztsOKB7pSFj2xBQ3NpCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMGEvz%2FjteWqRePnv%2FKtwDxk5ARQoVXBLpvwV0AMdELxfp6rymvSJ0mYSBCDrrTEXpJmRcRYAErpLviUZ8UVdl1NYPXMDk0FjddFJPEucwRAmw0zOTtqG1Dzfy3HuS9S7xpyyZKShivjiDrflO9HnFMHoZ3S%2F3BUZJ%2B%2Bk85lsd%2Fs6ZmxqVxkhfztgBGQ7iy%2FdoxyFv%2F4ZrSgBNOSpqaubmFicuAnz2YgnoxTivBFAK0y7KuWj6lUzpoG1IMpdMgPDnYpEfvNHR5PMO7RXu6elGSlV%2FQHmmqQjS8B19wH1xpko9TgZ1Hgt68tlbZSeShDmtyqTQJvw%2F6%2FesgIfo2a6f6mal6anTu%2FRldnDRHxau%2BxQhFY3axSC9Pes7KF73UDsjl7Y73bPjEvgpzljqFw1mHn9%2BukasvdixxbnQ9HJhEYvUOYbFerczSyZClSIazP4DtqxrapZM%2BZIOaQfjcGR3Zd9fiUn80laOnOPYH9gLgwkItIAoKjggMawGCZG5zEQiAcF1Tdsieul5iCvVxkr1vTgiAznc2pXaO6Hhd5l6LE3vWSMM4iNDSJKSUhrjoIIyE%2FiVnh%2F5%2Bh6OoijMxD%2BPneG1qMeaFjAdKMySIStQ23BlWXkVJdzw9aDT5aR0TE1vzVJJ3t6LFnQM3vkwlIzIyQY6pgHp4qGREjDUdgS5gXaCKnrT3XyYEelqn0SoWpAKCmT7Il%2BdSIXP1ZdpBFQypf8q1Vftk7LosT68qntNo1C63RBqz0lTmt%2FIbWxwoaM1V4XdHLyp2OTUglsGR8gX4ogCkTLfpJ7tD9yB97HETvB8LBiQUVimpKYW%2BHE%2FVX%2BLQmojB%2BG3I4TrXHIhXdpyt%2B2%2FRxLL85yNIXWKPsDhYDetuIMLTzFCADT8&X-Amz-Signature=95d573cd5bc1b2a8b1a305a8024c060a8626eae26ef67cee6a8402693287314c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

