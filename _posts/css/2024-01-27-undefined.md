---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB7WEA75%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC38JXBmZJBQYY5zsUZtwDGLLjTAbPAp7u9PS8kJ3wx%2FAIgR0lSvTvAPVNH6HDlP8dqQPj9ZRHhNsWp%2BB23ZM6HHMcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCRSSvX%2F8zIRKHrorCrcA8yduKcSkswfL50kJLTM2uN6%2FFQyqlfFlPc9PoZKaQKSUALLALo2oiqJ3mS%2BB2gVOMYcRQBrx45BH%2FTntgkoHQtRF4PfzEL1hn8PduV6Fc%2FVTigReLG9ZXzhNoparYTY11oYTCViRt2kQJm9xtTuOkpZNPFCXSvHi57%2BSE3U3xXtlrI12IuOmUzzCE85zSPgYVvAgfJrWKXi0uzsu3Li9yXK089tHGGDumXrimthvxtqfw5tOkOm0XI1j%2FrI6CdTMwxEtuogTtJS56MCp9TlbQC%2BPkk02AsGqWRw%2FBWTZ7jGYHlEwOiVz0AGvQ1%2FZhF5exWP5YVRrj%2FNmy2UaV1UCj7XWE6ddich6ziScG8X2sLBZglWdwRiHEo4OVjD6KYNBl9xFiGH7Z4DIUn%2BM7U6UTPqyv%2Fk1Vph4Npa0k2E6ENEGxQxVm5BLr6UYJUu0dLRiz03Qx06jQyc7y6HKHXAK0djvXusJfrYnmfThpAp576HIuC5p4aLmP4RViHWcDvBodmXgJAhpZdiRPgfRGyTrdTbhV86Z4oTx8vFC8LR4p9R%2FSq6urN5gSWJfxa8tGo5LrwwYNrkGculpSMsSJfL3%2B2WKQwek6uBKlVNsiCXOgX86yExSvkS6EN5IiVoMLKWvskGOqUBHu7%2FJFgYYb0QxhTW1ESjdAH57YuN46JXUiqjpTItVKVjjUX7aqGUjPTP0uZ5pHttNvcWaNqiC8ufAtenIoeiPy7Sb9gek2F4CZb0Hd2TpRcm5oiqXBqoKZcL4WE8RT2aMh2M4XxAci2w3suIyVe1Vc2jOASo7mpe8aKSXJAmgjkOVEEavrtpoYF5JHFqW86q%2F7SlHXkWN%2BL7PtrQEDwIvEMVkKh6&X-Amz-Signature=d29bca83375d03242f3412f7b4e5fc0eb309948fb5fa0e00239fae8feb02acbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB7WEA75%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC38JXBmZJBQYY5zsUZtwDGLLjTAbPAp7u9PS8kJ3wx%2FAIgR0lSvTvAPVNH6HDlP8dqQPj9ZRHhNsWp%2BB23ZM6HHMcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCRSSvX%2F8zIRKHrorCrcA8yduKcSkswfL50kJLTM2uN6%2FFQyqlfFlPc9PoZKaQKSUALLALo2oiqJ3mS%2BB2gVOMYcRQBrx45BH%2FTntgkoHQtRF4PfzEL1hn8PduV6Fc%2FVTigReLG9ZXzhNoparYTY11oYTCViRt2kQJm9xtTuOkpZNPFCXSvHi57%2BSE3U3xXtlrI12IuOmUzzCE85zSPgYVvAgfJrWKXi0uzsu3Li9yXK089tHGGDumXrimthvxtqfw5tOkOm0XI1j%2FrI6CdTMwxEtuogTtJS56MCp9TlbQC%2BPkk02AsGqWRw%2FBWTZ7jGYHlEwOiVz0AGvQ1%2FZhF5exWP5YVRrj%2FNmy2UaV1UCj7XWE6ddich6ziScG8X2sLBZglWdwRiHEo4OVjD6KYNBl9xFiGH7Z4DIUn%2BM7U6UTPqyv%2Fk1Vph4Npa0k2E6ENEGxQxVm5BLr6UYJUu0dLRiz03Qx06jQyc7y6HKHXAK0djvXusJfrYnmfThpAp576HIuC5p4aLmP4RViHWcDvBodmXgJAhpZdiRPgfRGyTrdTbhV86Z4oTx8vFC8LR4p9R%2FSq6urN5gSWJfxa8tGo5LrwwYNrkGculpSMsSJfL3%2B2WKQwek6uBKlVNsiCXOgX86yExSvkS6EN5IiVoMLKWvskGOqUBHu7%2FJFgYYb0QxhTW1ESjdAH57YuN46JXUiqjpTItVKVjjUX7aqGUjPTP0uZ5pHttNvcWaNqiC8ufAtenIoeiPy7Sb9gek2F4CZb0Hd2TpRcm5oiqXBqoKZcL4WE8RT2aMh2M4XxAci2w3suIyVe1Vc2jOASo7mpe8aKSXJAmgjkOVEEavrtpoYF5JHFqW86q%2F7SlHXkWN%2BL7PtrQEDwIvEMVkKh6&X-Amz-Signature=05235ac1024f38095acae51e9830644095079478c52bbada3e1325cb10aeff15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

