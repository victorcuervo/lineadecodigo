---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AHBQDRG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBPNrk%2Bp9WDda0gqXE5kFQn8TiePQnz8U7mpNGcZ%2Bs9LAiA8aB7oVssqF%2BUvAEPoFNUaiFIqRP90srm9qUi5UId%2BOCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM6S%2FYDPD3F6e%2BJamvKtwDfz9XBlQ4lJvEcs1E03vO4Bsx8mTnozgzNwma%2FzA7ADXwVpBhDTsjZpQDC0T9rZ6GRCyfwOzpYRuVx5BhydJQN26%2BasL9C9o7esLX1RU5N7PIW5hoooLvNNF1I2QkrMVnFcLNQK1M1W6THfBSwSs%2B%2B8q%2FJh5PAJmZCLHQMdg8maOp93BKGvVAHFdPP86an1cTRpziaGT3C23amYGLuF6Gzj8nFalpT1QytHr9MQSccFPfvGVYdrN90VnzB9%2Fl%2F136e%2F%2F7vIIBIGLCrHDgB9OGxwpbDNQ%2Ft8XVP0zHdKhidaHWaZq7jxOwizqh8uVnYmLLC1WHhzOcMQ18e92vco3EIejlFX3wdrldI5w22Ewj%2B3xku9aQXL7cyldliO%2FDXp4Mr%2F6Qi3QPrAPrt17KRVgBFa58%2FO2JmdO4lvijbgdtU1RxDrqCUz7zqp8ReWtzCeO1w2lnY2HfGfSvrs%2Bl3TZNcEbhnHieCFbiZVKg%2FQ7V%2BKN5VB5bUu3Mtax3VDoTrUMGB3uB%2B1l3ZT3ffQIA18qetkQ2Y%2B%2Bo8prpaNtaIkUgtBYQrQGbD38oIk2qx79EEeubxzFppboqNpBmRFxxSJ4ddAcYNBrVORI%2BsM4tGyfaFSCdG0B%2Fpx%2ByAhbK7K8wrMvEyQY6pgFeOH3Z16qETpdpuyiT8cKxr49yxmdgQHiVQrvsID5LFXaB22iagQdWOUyHyXr48x1H1XDjFg%2FqDckoBMYEsv0Uy3Tt%2FhAm%2Bl1tdm1oX3TjjHziQ0I1%2BuxBN7P3DsGJI3HuV%2BWmxwAz6b%2FK5afpDEK2PB%2BxLAMXsj3IPdepUg0bMyGV0dWASX%2FM6Jp%2BV1bbEW2flymja8NYnQD3cic8wJf%2FxO0UWU%2FQ&X-Amz-Signature=4a5604f05999564a21970af9a9aebf6463436cd726bcb0dbcc8ca880fde4f8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AHBQDRG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBPNrk%2Bp9WDda0gqXE5kFQn8TiePQnz8U7mpNGcZ%2Bs9LAiA8aB7oVssqF%2BUvAEPoFNUaiFIqRP90srm9qUi5UId%2BOCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM6S%2FYDPD3F6e%2BJamvKtwDfz9XBlQ4lJvEcs1E03vO4Bsx8mTnozgzNwma%2FzA7ADXwVpBhDTsjZpQDC0T9rZ6GRCyfwOzpYRuVx5BhydJQN26%2BasL9C9o7esLX1RU5N7PIW5hoooLvNNF1I2QkrMVnFcLNQK1M1W6THfBSwSs%2B%2B8q%2FJh5PAJmZCLHQMdg8maOp93BKGvVAHFdPP86an1cTRpziaGT3C23amYGLuF6Gzj8nFalpT1QytHr9MQSccFPfvGVYdrN90VnzB9%2Fl%2F136e%2F%2F7vIIBIGLCrHDgB9OGxwpbDNQ%2Ft8XVP0zHdKhidaHWaZq7jxOwizqh8uVnYmLLC1WHhzOcMQ18e92vco3EIejlFX3wdrldI5w22Ewj%2B3xku9aQXL7cyldliO%2FDXp4Mr%2F6Qi3QPrAPrt17KRVgBFa58%2FO2JmdO4lvijbgdtU1RxDrqCUz7zqp8ReWtzCeO1w2lnY2HfGfSvrs%2Bl3TZNcEbhnHieCFbiZVKg%2FQ7V%2BKN5VB5bUu3Mtax3VDoTrUMGB3uB%2B1l3ZT3ffQIA18qetkQ2Y%2B%2Bo8prpaNtaIkUgtBYQrQGbD38oIk2qx79EEeubxzFppboqNpBmRFxxSJ4ddAcYNBrVORI%2BsM4tGyfaFSCdG0B%2Fpx%2ByAhbK7K8wrMvEyQY6pgFeOH3Z16qETpdpuyiT8cKxr49yxmdgQHiVQrvsID5LFXaB22iagQdWOUyHyXr48x1H1XDjFg%2FqDckoBMYEsv0Uy3Tt%2FhAm%2Bl1tdm1oX3TjjHziQ0I1%2BuxBN7P3DsGJI3HuV%2BWmxwAz6b%2FK5afpDEK2PB%2BxLAMXsj3IPdepUg0bMyGV0dWASX%2FM6Jp%2BV1bbEW2flymja8NYnQD3cic8wJf%2FxO0UWU%2FQ&X-Amz-Signature=84ad17e8d79f8fd9ec006591d149c5ee8f08a738d12385c70580fd58c7e1dcde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

