---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6HUCWY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBf70YlplaM8zGFPo9qY815dEOIHk8dbocpvDDNwhU6UAiEAvYx3zvruwVdF%2Bcbj6MP%2FbfuopyVUaUuGnpOGFp1M0eIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjivqnkxa4hTE9vKCrcA9pMf9YAAYbNJrs1aOrLcHplURNCLu5aU9GMlPVj%2BYTc9sf7866HohpPUUyFDOtYr7nDknvWc03Kq%2FTGZRbjpX%2BdurKa5r2DxA8Wdn0KIYBTnnukoOLRNpaTQy2qHo9p4nD6CuEFit9PZ9ZA%2BcYlJlPlrXIMzN7mT9xn1qXUlZfunQ1efyYR5gcyVvZNScMHVC7WV4maFOw88FJW9bnUrhSv0uu0U16pTtpvHY%2FLhL3oiBzHhV9NomfWH9KVSi2kMhurtKlduAxu1NWmFaPoY2%2FHreN2V86tre56BecbBun%2Fw6EVPrK9kRfOJ6MYASSdz4Ivgi41CgIJiC3jjjrpZ3mKKqMACoThbE9dPNw2jLgUrI7FsjNH94ZRxlP%2B0T5qaRh04H6iKaJpV0iC8vzORBy9rBf8%2BQrMrtOG7%2Bo2ZK9cd%2FYaB%2FHx95tR6FXcoTh%2B8OUS7W22Gk0FBEcA4d9ji7%2BQB%2FhHEIv2adVVETdrO%2F%2BS7R2H2jSboEeqqeD1UbutcLC8MzT3JZ35qkF0QuFG2Mo1l1jw2d3Et7VN5k6xsdDH2For%2FOh9OMkJ1rR37bEQR5N98yoKE9sXDnAPecF%2FNyEk7Wm8U3UcxOoWy4x7fChd%2BB9kjyj34AcohSQ1MPej1MkGOqUBJrUadoHDDJm3lAgM3yZBVbHs2%2BL9CntJQQyozCy%2BPAy5GQMBfZNY0tGCdQWF0wVG26uRAL%2Fb9dxNo0MjZNhf05FNjmh073p8wl%2BCenoLS8gjMHXaq%2F2wL959A4Duax%2BtMzMSF89Ym3DpR912hutnP4jbJE0qFe4iqEiU2DLjwcoRV1EIfBsY3XlTgRSRoD0JX3Ntg6fmA0VB%2B2ulGppE2OHhiQCf&X-Amz-Signature=846f7ed0aff958c2e9e5de2ef3cc6b66b0d227671c31b4f0d9ee0559e7b32938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6HUCWY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBf70YlplaM8zGFPo9qY815dEOIHk8dbocpvDDNwhU6UAiEAvYx3zvruwVdF%2Bcbj6MP%2FbfuopyVUaUuGnpOGFp1M0eIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjivqnkxa4hTE9vKCrcA9pMf9YAAYbNJrs1aOrLcHplURNCLu5aU9GMlPVj%2BYTc9sf7866HohpPUUyFDOtYr7nDknvWc03Kq%2FTGZRbjpX%2BdurKa5r2DxA8Wdn0KIYBTnnukoOLRNpaTQy2qHo9p4nD6CuEFit9PZ9ZA%2BcYlJlPlrXIMzN7mT9xn1qXUlZfunQ1efyYR5gcyVvZNScMHVC7WV4maFOw88FJW9bnUrhSv0uu0U16pTtpvHY%2FLhL3oiBzHhV9NomfWH9KVSi2kMhurtKlduAxu1NWmFaPoY2%2FHreN2V86tre56BecbBun%2Fw6EVPrK9kRfOJ6MYASSdz4Ivgi41CgIJiC3jjjrpZ3mKKqMACoThbE9dPNw2jLgUrI7FsjNH94ZRxlP%2B0T5qaRh04H6iKaJpV0iC8vzORBy9rBf8%2BQrMrtOG7%2Bo2ZK9cd%2FYaB%2FHx95tR6FXcoTh%2B8OUS7W22Gk0FBEcA4d9ji7%2BQB%2FhHEIv2adVVETdrO%2F%2BS7R2H2jSboEeqqeD1UbutcLC8MzT3JZ35qkF0QuFG2Mo1l1jw2d3Et7VN5k6xsdDH2For%2FOh9OMkJ1rR37bEQR5N98yoKE9sXDnAPecF%2FNyEk7Wm8U3UcxOoWy4x7fChd%2BB9kjyj34AcohSQ1MPej1MkGOqUBJrUadoHDDJm3lAgM3yZBVbHs2%2BL9CntJQQyozCy%2BPAy5GQMBfZNY0tGCdQWF0wVG26uRAL%2Fb9dxNo0MjZNhf05FNjmh073p8wl%2BCenoLS8gjMHXaq%2F2wL959A4Duax%2BtMzMSF89Ym3DpR912hutnP4jbJE0qFe4iqEiU2DLjwcoRV1EIfBsY3XlTgRSRoD0JX3Ntg6fmA0VB%2B2ulGppE2OHhiQCf&X-Amz-Signature=02ffa6e171a303fa39224a0bcd994a28be8ab44ed2acf363c8449e8a21438a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

