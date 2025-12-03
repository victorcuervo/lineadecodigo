---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYSUZ636%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDgvIAIe%2F4nU0K7P0UB8mNjHK68GGWdYB2O5ZGe9HbkugIhAO5shKTe0mIego0n2e%2BLKd5%2FVwQahZ%2BwLmibs9YRqEcHKv8DCDcQABoMNjM3NDIzMTgzODA1IgypwiT9K7mrTNR%2Fddwq3AM3x15c867pu7VQ9ANnDS5ifROu5LTVGW41AUrjrXPIAa25iVHLVwy5u4g3f918JfbRG61Dsahbp924VCYyRm1yiIxplhY7kWnmth6lscuonlwwNHHrDuji1AEbI8oEeBz3rP5akGPRe12zC5FkECQz%2F2ykMJpzt%2FwDlY9vMdIMn1iOeIVo4PJqQm9VKKW2bpIs2Rm6EpDf5LEjdgOXU%2BXNCQ%2FEuu5FdjtPZnYyAIJoJ5MFM2PwJySKkH9BPXma3xjBB9JOF32NTV%2BH7TAub7npPlhR34XSPgfcTXbzMKaQ5p%2FhIPkua2SZBjuMXWN345Fbrfn47AE9M2YG24iMRBHyvkcXSWwG%2BqNWc%2FPW4U2HnKd3DF7iF7l%2B07F5XwXRrTXdLZp%2Bl1BkNAWZ0Mwb8Y9womyGo%2F2FF%2BNDrtXwPGz2kocNYrnYPsPg629hvBYe7ZStpIkdC4SmWH6HOcin%2BdFAcGqp5SQ0b8I7W9bzad0Yha2zZRd%2F7a%2BbQpADOdZy%2FP6xXfbScH9aXUSE0MY4SJnsyisi%2B4HgVXI%2FuuCdb8xloe%2BnX5HBOQQNtr3mKsNX4TlywYfGYC26tDdixiV%2Fu24RhwwoykSOJVylp6dcDddd82T4TUsg6pJ9%2B20x8DCM3MLJBjqkAdBGKAisDW4fWO1oM1PLr2L1JqtURB34TaAIU1Fg8NQe%2F3YBcUKHpykDsY9X7dUvAgP23B2Of%2B9lx8l4grSLtTnKQYD21a9AS%2Fw0WIWl4%2Ff0z5UcZSS0uv%2Bw3SlVr6P6Ih5WDq2AMhVlQ%2BhHcxwEn%2BMZf%2B9lxrya72JOasDams50j7AGKIwGTihVMdkhcxzihcOImn5vK1Dejs3ZF8yrEnfmIIvT&X-Amz-Signature=357043503401c58db8fbd5aa08476ed9c2b2b51070cad12a3aa65c243a6fb6f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYSUZ636%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDgvIAIe%2F4nU0K7P0UB8mNjHK68GGWdYB2O5ZGe9HbkugIhAO5shKTe0mIego0n2e%2BLKd5%2FVwQahZ%2BwLmibs9YRqEcHKv8DCDcQABoMNjM3NDIzMTgzODA1IgypwiT9K7mrTNR%2Fddwq3AM3x15c867pu7VQ9ANnDS5ifROu5LTVGW41AUrjrXPIAa25iVHLVwy5u4g3f918JfbRG61Dsahbp924VCYyRm1yiIxplhY7kWnmth6lscuonlwwNHHrDuji1AEbI8oEeBz3rP5akGPRe12zC5FkECQz%2F2ykMJpzt%2FwDlY9vMdIMn1iOeIVo4PJqQm9VKKW2bpIs2Rm6EpDf5LEjdgOXU%2BXNCQ%2FEuu5FdjtPZnYyAIJoJ5MFM2PwJySKkH9BPXma3xjBB9JOF32NTV%2BH7TAub7npPlhR34XSPgfcTXbzMKaQ5p%2FhIPkua2SZBjuMXWN345Fbrfn47AE9M2YG24iMRBHyvkcXSWwG%2BqNWc%2FPW4U2HnKd3DF7iF7l%2B07F5XwXRrTXdLZp%2Bl1BkNAWZ0Mwb8Y9womyGo%2F2FF%2BNDrtXwPGz2kocNYrnYPsPg629hvBYe7ZStpIkdC4SmWH6HOcin%2BdFAcGqp5SQ0b8I7W9bzad0Yha2zZRd%2F7a%2BbQpADOdZy%2FP6xXfbScH9aXUSE0MY4SJnsyisi%2B4HgVXI%2FuuCdb8xloe%2BnX5HBOQQNtr3mKsNX4TlywYfGYC26tDdixiV%2Fu24RhwwoykSOJVylp6dcDddd82T4TUsg6pJ9%2B20x8DCM3MLJBjqkAdBGKAisDW4fWO1oM1PLr2L1JqtURB34TaAIU1Fg8NQe%2F3YBcUKHpykDsY9X7dUvAgP23B2Of%2B9lx8l4grSLtTnKQYD21a9AS%2Fw0WIWl4%2Ff0z5UcZSS0uv%2Bw3SlVr6P6Ih5WDq2AMhVlQ%2BhHcxwEn%2BMZf%2B9lxrya72JOasDams50j7AGKIwGTihVMdkhcxzihcOImn5vK1Dejs3ZF8yrEnfmIIvT&X-Amz-Signature=f8296ca545a7c366a431299fd652989f104bd3dfd73e19b77d2227180c66d80e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

