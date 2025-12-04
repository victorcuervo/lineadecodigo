---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEHKZFVR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFCRgNBCfVWMh2l6dXnZcRMhOsOpcFJ5QAH2%2Brma2K3HAiAraKjPE7mDu3APVK6ddFK6qER84YB2pxmqPmGFFh8%2Fiir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeK0sg197epAZ%2BouhKtwD%2Ft2awM8fggN05xqD%2B8fE5D3lJLVS2bQHyS4f%2BqY1VHT8OLkS1BvU3rhdM4KBEzQn%2BO94%2Bfc1bDSkjMeB%2F813jOUFumdwJkN7G%2FE4GVe3VOh0gvaHj05qE%2FztJUs4OSERkwv6%2Fbg%2BVegmt9yzW4kQ5ztRMlDGU6y%2FWrwcrUEv6V2d1PGAu55IKw5g5NbNbur2N3QYt2cWkYEPH%2Fs5GRNmMKNIwu2s2VPDNgl5mwB5MOEEL6qtjbJvEwSD0UXv0Pr%2FSBcnJNZxOiwv804hI%2BHrJgh4JX0soA%2Frl7U4G6GyHMCW%2FW%2F3FwpTjXqiE8y%2Fz0EVu9C4hUvi3bnA4AEopO6VBkU587CWTYMoLDWZ0MCpDvsHRYqUFFw1zST6bq1fhYcow%2FgIBeJdJkHhyAbfiQItvPQLOO3UbQudr0%2FW1MOGmfWLgs6AT7vjoElI45TDP1gLLqY3Q15qzLKdOdWLGmmoUweIDFBsGdOM1zu01U41Y11r5NSclP4lHC02XUBauAD8DP%2BUjIMHbqHUnbDMdEABinGk2Cwzne0D10ttGMiTIrIoFh10L5rpGV0PF2jzkG%2FSbnE1bM%2B6hP7TzGUPy6bNQ7vS3%2BwtZ4YTsMNtjzFaAJK1YegA1ThSRZZMQnowxfLDyQY6pgH7PNYEZEOn3BgP3iFReezt7N6ta8oq1FbFP22dQ2NSCfKUmOSzXa40gSEeRJT8HwLFiR00bVbNgGBnv2jvcRemvwEImlLH3IiAgLMKdlWYcBC%2BJls5kDHEWvv6tD3ucwhr9o8uU2KdODWu%2BbACPTWGhANODe%2FDLb1R6fqRXtn1tP3tKRkYqFedvxjE5Jflqp%2BiAtnl6bcCHxTryor5AY7my%2F67Hovc&X-Amz-Signature=8687c93026d39f0cced36a253019c319cd72865823dd1ac893210d29f44c24c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEHKZFVR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFCRgNBCfVWMh2l6dXnZcRMhOsOpcFJ5QAH2%2Brma2K3HAiAraKjPE7mDu3APVK6ddFK6qER84YB2pxmqPmGFFh8%2Fiir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMeK0sg197epAZ%2BouhKtwD%2Ft2awM8fggN05xqD%2B8fE5D3lJLVS2bQHyS4f%2BqY1VHT8OLkS1BvU3rhdM4KBEzQn%2BO94%2Bfc1bDSkjMeB%2F813jOUFumdwJkN7G%2FE4GVe3VOh0gvaHj05qE%2FztJUs4OSERkwv6%2Fbg%2BVegmt9yzW4kQ5ztRMlDGU6y%2FWrwcrUEv6V2d1PGAu55IKw5g5NbNbur2N3QYt2cWkYEPH%2Fs5GRNmMKNIwu2s2VPDNgl5mwB5MOEEL6qtjbJvEwSD0UXv0Pr%2FSBcnJNZxOiwv804hI%2BHrJgh4JX0soA%2Frl7U4G6GyHMCW%2FW%2F3FwpTjXqiE8y%2Fz0EVu9C4hUvi3bnA4AEopO6VBkU587CWTYMoLDWZ0MCpDvsHRYqUFFw1zST6bq1fhYcow%2FgIBeJdJkHhyAbfiQItvPQLOO3UbQudr0%2FW1MOGmfWLgs6AT7vjoElI45TDP1gLLqY3Q15qzLKdOdWLGmmoUweIDFBsGdOM1zu01U41Y11r5NSclP4lHC02XUBauAD8DP%2BUjIMHbqHUnbDMdEABinGk2Cwzne0D10ttGMiTIrIoFh10L5rpGV0PF2jzkG%2FSbnE1bM%2B6hP7TzGUPy6bNQ7vS3%2BwtZ4YTsMNtjzFaAJK1YegA1ThSRZZMQnowxfLDyQY6pgH7PNYEZEOn3BgP3iFReezt7N6ta8oq1FbFP22dQ2NSCfKUmOSzXa40gSEeRJT8HwLFiR00bVbNgGBnv2jvcRemvwEImlLH3IiAgLMKdlWYcBC%2BJls5kDHEWvv6tD3ucwhr9o8uU2KdODWu%2BbACPTWGhANODe%2FDLb1R6fqRXtn1tP3tKRkYqFedvxjE5Jflqp%2BiAtnl6bcCHxTryor5AY7my%2F67Hovc&X-Amz-Signature=f93e5d0bb475ae0167c2f2a85082ae808eb038c1a72817513301d39e235897ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

