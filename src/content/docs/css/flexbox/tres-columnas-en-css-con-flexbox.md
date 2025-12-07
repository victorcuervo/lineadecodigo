---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OBRUIHP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEOh%2FmoYX%2BK%2BknSQtaXbbzxDICLKPdKLNNx5FMNMNG7gIgIwQPIHUuq23FPkNBX6Yj5LSAlYc2RWnwOi9Gb8%2FVwpQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp3XqezdlZcZUD%2F4CrcAxFfa6NmXO%2BiV5tb5MWevAOaIDPxOb2p6695FohbQJHRk%2BoQlA%2FvbUPvgYx6ss5%2BrKRWe6JRnRTn1Efy48dgzkSAXWg%2BBu6ofk6OBYgbGk3c5dNxHD%2FQCJVaFs4YumnHKsww4nruKiydt%2FBiQCo67hZ4mb%2B53rzdbneJ1u3BtVuapyVAmkYcGvDP2RL1HO%2BtKJB2hg5RarMjdro%2FZoDaAhrntMusBUs7xjI4Mi8znpyRrA90F0zGBugi8%2BzHcswOGWCD9IT1eVz0kQDH1y%2BUTuOalKOxOfjpaz619J2Y8g0Sw%2F3AeDmOi2o6B8f9y1UJtQI5jvW7xvV5BpJTAmDb%2BgAkQG%2B1Mh%2Fh1sAMwAi6cdf48XiDsSA%2B%2FhSceNBqZwiyLkNVRJjaaPWyK8nclu5c6crJGCt9Q5wmNeAHgHCTtTEBMTFHmeGjNbfWYy4Ij8RL9ly0LaqSQ3vkojQ9i0JbVGnC7o1re0qgABRk540SIrznC2ohbJJchYNZC1oNU4RnpnroC2EZMIRHHdpBaJ4B8PzurjNgGzCI7Ct7WN5NfUvYAbtSEWUqbD%2BbLp0LJ5LeIosIcZnO2zNk%2BZ0%2FUs2DV%2FtjRiTNwxglDGMCGp2xhkqrolVump91WuXzeYS%2BMMT90skGOqUBnUb1MtCvg2%2BZY90%2Bw6HpzwpwT1jiGWv4HgxAEeD1CLUCfx2NJDGuYbFv3mtvHZWe4hQVqJkKCJBLjHXcNWb9CjGWewEGAQrdJudhILmr5hia4wQa%2B13eSNx2k%2Fx2ZDdExp8FzZgSCycxzZcxxxsamjzRe9FZ9jyS%2BoFvKktcsPF5lgZE6JIVggCC9LdWc1FYsI4iDpUl%2BFIH6Nt5y9rhYpeIuTTb&X-Amz-Signature=a0ea94eaed24e37b384849ed1ed96a128dda4f2c0aeac94e11d22b8c30d735eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OBRUIHP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEOh%2FmoYX%2BK%2BknSQtaXbbzxDICLKPdKLNNx5FMNMNG7gIgIwQPIHUuq23FPkNBX6Yj5LSAlYc2RWnwOi9Gb8%2FVwpQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp3XqezdlZcZUD%2F4CrcAxFfa6NmXO%2BiV5tb5MWevAOaIDPxOb2p6695FohbQJHRk%2BoQlA%2FvbUPvgYx6ss5%2BrKRWe6JRnRTn1Efy48dgzkSAXWg%2BBu6ofk6OBYgbGk3c5dNxHD%2FQCJVaFs4YumnHKsww4nruKiydt%2FBiQCo67hZ4mb%2B53rzdbneJ1u3BtVuapyVAmkYcGvDP2RL1HO%2BtKJB2hg5RarMjdro%2FZoDaAhrntMusBUs7xjI4Mi8znpyRrA90F0zGBugi8%2BzHcswOGWCD9IT1eVz0kQDH1y%2BUTuOalKOxOfjpaz619J2Y8g0Sw%2F3AeDmOi2o6B8f9y1UJtQI5jvW7xvV5BpJTAmDb%2BgAkQG%2B1Mh%2Fh1sAMwAi6cdf48XiDsSA%2B%2FhSceNBqZwiyLkNVRJjaaPWyK8nclu5c6crJGCt9Q5wmNeAHgHCTtTEBMTFHmeGjNbfWYy4Ij8RL9ly0LaqSQ3vkojQ9i0JbVGnC7o1re0qgABRk540SIrznC2ohbJJchYNZC1oNU4RnpnroC2EZMIRHHdpBaJ4B8PzurjNgGzCI7Ct7WN5NfUvYAbtSEWUqbD%2BbLp0LJ5LeIosIcZnO2zNk%2BZ0%2FUs2DV%2FtjRiTNwxglDGMCGp2xhkqrolVump91WuXzeYS%2BMMT90skGOqUBnUb1MtCvg2%2BZY90%2Bw6HpzwpwT1jiGWv4HgxAEeD1CLUCfx2NJDGuYbFv3mtvHZWe4hQVqJkKCJBLjHXcNWb9CjGWewEGAQrdJudhILmr5hia4wQa%2B13eSNx2k%2Fx2ZDdExp8FzZgSCycxzZcxxxsamjzRe9FZ9jyS%2BoFvKktcsPF5lgZE6JIVggCC9LdWc1FYsI4iDpUl%2BFIH6Nt5y9rhYpeIuTTb&X-Amz-Signature=646eac83d463d06aa74fc8d9eedbee0a2bd053625752197e67211061d66a4c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

