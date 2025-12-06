---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVYI35Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgUbCxRSXv8xCxtr9LMDtchyWXDLn5QZxez%2FMSTN4bNwIgdOtFWiHsXKBIYuqes1O3kYX205%2BVlmmFbCJDAqz8QK4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAit9JbEslqqFXy5YCrcA4iJ%2Bz7bSDAIImPooPKzQxqAulI96pjza2lfjqG3WxaLnB4k0qtYA3X%2FYol9dfyQvp6kZTtv%2BCG5CXtF9%2BW%2FnzPeeCdm4uCjyrr9zCb7vWUvtp6D4TCgOwdbLIcco4pN1vOdcUEZPxlYwX3z0S6dmvssEdagKKt4EH2QaeEwY4WW8majzR3drKatRl0VKRlEH3q%2BEoXVirvqwgTouqtLH5Ddw3Ba%2BujD3ol9%2FSHkFgiaX3f6lnTn3iq2JMQ1Ff0JLCFFxm1FrVbYeo10IAHxQDIBUKIA%2FwVahn8zyLqGWoWmomfVK4jLOGUpX3uWsEtUz4IYztUA6mb58zog3iU6tZ4QkCHYjfYO33ZLTxwleErElBaecuOxWM4X0NFgtnFuiNgTpCvhQK3ofmNB6LPGGcmsZWwF5KpxldviAvSu67WUrsWYqTxZeDoQtXMwa5eoadO6z4j3WiDMnxcpIFDFqyWERml8ECS0pGCScrDPflr3YchdDT2AelAVJXJxyaIN0BnMR9NztcHq3tM6XPI5OB0xcu0qYaTToukBGgQUL0pJ0ZNzDoiGuJGlWMxV6m5At8ZQhja0RBXNiHgu5QQ8Wg8UwvHJnidV36QIyW8GIYmLticdpVmDmuJdFBVCMKnE0ckGOqUBqS8fD6vn79SFL1DpVTF3KWseQ6%2Fz9s8BLKd8gquJOL%2BuNaX%2Fcw5gAInfdSwhnz8UTcoBcLDn3lsaO%2FpHc01erlzLxZhdaR%2B147U1o4datkQkTc%2B%2BiSV6e19e0SLHV5h32Sl3%2B5I9tPMxNaqgVhziC5z0IDVpspMUcBRPVwqQWCcXp2flNZMwgThelwxn7Xu24Vk5cwcgd%2BPUFg9w4QCA0oY6uyyd&X-Amz-Signature=260868938def262a63e7acf783ebf9b4cb5ae83a25cabd4f14793379dac2f74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVYI35Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgUbCxRSXv8xCxtr9LMDtchyWXDLn5QZxez%2FMSTN4bNwIgdOtFWiHsXKBIYuqes1O3kYX205%2BVlmmFbCJDAqz8QK4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAit9JbEslqqFXy5YCrcA4iJ%2Bz7bSDAIImPooPKzQxqAulI96pjza2lfjqG3WxaLnB4k0qtYA3X%2FYol9dfyQvp6kZTtv%2BCG5CXtF9%2BW%2FnzPeeCdm4uCjyrr9zCb7vWUvtp6D4TCgOwdbLIcco4pN1vOdcUEZPxlYwX3z0S6dmvssEdagKKt4EH2QaeEwY4WW8majzR3drKatRl0VKRlEH3q%2BEoXVirvqwgTouqtLH5Ddw3Ba%2BujD3ol9%2FSHkFgiaX3f6lnTn3iq2JMQ1Ff0JLCFFxm1FrVbYeo10IAHxQDIBUKIA%2FwVahn8zyLqGWoWmomfVK4jLOGUpX3uWsEtUz4IYztUA6mb58zog3iU6tZ4QkCHYjfYO33ZLTxwleErElBaecuOxWM4X0NFgtnFuiNgTpCvhQK3ofmNB6LPGGcmsZWwF5KpxldviAvSu67WUrsWYqTxZeDoQtXMwa5eoadO6z4j3WiDMnxcpIFDFqyWERml8ECS0pGCScrDPflr3YchdDT2AelAVJXJxyaIN0BnMR9NztcHq3tM6XPI5OB0xcu0qYaTToukBGgQUL0pJ0ZNzDoiGuJGlWMxV6m5At8ZQhja0RBXNiHgu5QQ8Wg8UwvHJnidV36QIyW8GIYmLticdpVmDmuJdFBVCMKnE0ckGOqUBqS8fD6vn79SFL1DpVTF3KWseQ6%2Fz9s8BLKd8gquJOL%2BuNaX%2Fcw5gAInfdSwhnz8UTcoBcLDn3lsaO%2FpHc01erlzLxZhdaR%2B147U1o4datkQkTc%2B%2BiSV6e19e0SLHV5h32Sl3%2B5I9tPMxNaqgVhziC5z0IDVpspMUcBRPVwqQWCcXp2flNZMwgThelwxn7Xu24Vk5cwcgd%2BPUFg9w4QCA0oY6uyyd&X-Amz-Signature=5cdb8807caf678c4c00f024ad7b6d027847be6f8461a691f5e4bd0d6875d40c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

