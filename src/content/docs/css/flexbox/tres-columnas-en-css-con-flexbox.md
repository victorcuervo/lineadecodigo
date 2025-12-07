---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BPZOZF2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiT4YgXDkMf4E6Mi24Wo1%2Fp51O7xlugLO2pL4sOWBPlAIhAPJ%2F%2BLjrZpspiPc5uLpzxML6jt%2FmuaCBM2j2ZKwrVUD%2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPohb0tT6A0Q7alV4q3ANwVvrGrTem3hXjDpHBtSk09%2BL8U6oSlRSK%2FaeblaWmCo2Bl%2BlcVwkDJ0CZ78nLLXtNrANxIwckq0CUDX7gQCzXn%2BfHdxLhMFdB4YGauIsxzxyjVMimampRgGcYccJP%2FgMlmYvwawfDddQWlfSzfR785vuVOaxDFjpmoRbpFe2%2FJBN3OG%2F4bzJkiqDwwpfoBL2dR%2Btk9MDNAnA2HK2S3g4Ahvw0MPjHp5ySQLmB7d%2FdQY76iTpxrehBvegau9g2EADn%2B58SDs78CtTzUAM3XbjVKCV3so%2FlVNmcQax9sk7pht5lFEUU0PX2oSIQXo66rm2vHdJK%2F2py3PzEjADrW7n9DI5tbjulboAeS%2BDupXJkTdV4QuD4%2Bs%2Baq6LxvjIMUxwuWXQKdfNSTFn7y1y29gDsjNQfdc4CP5JMUXDmmwX55WJCcNRaG%2Bx5ihK2LcKbqVrIK7hvyygLvaY%2F%2B%2BLTv4NfVTLXfSsggi8B9GHNi%2Bt3a2uQNFkFr2WkyeJkfTyXuPcJMSKOgGK4rCgZl%2FomQpTXWukpIbTA2MATG1CxtsSOB2lXu46j%2Bw%2Fe9KFwXQ9SgxCgDBlocO7IatA%2Fmo3tbeUPFpY5M5ys5G7GKsoAJn%2Fp0slusPKZgz3FSZ0w3TDkvtbJBjqkATviA6g1%2B69mmPluH1GTXyEGGGXAiHAL8fw8JJuTsLatqQ%2BLblBTizq4hgzVKLIBDe3IkbqfH3Tas8r4Mzp5z9syk4g5k1aUzPXQHtp2dHocHW0ikhOPJnmZ%2BN670JKbgW8DbiSDHs4D7Y152Z%2BaaJL%2FlYB9guee2FBMiNLwpD7qni%2F0WNHO3FMe1%2FfCiUBK56%2Fk6SxW%2FRx4DnquRdXNHigZAUhJ&X-Amz-Signature=331e49f22f04ed1ba7b95edc100cbce431cdc4411cbbbac6db4cebfd1db4be6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BPZOZF2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiT4YgXDkMf4E6Mi24Wo1%2Fp51O7xlugLO2pL4sOWBPlAIhAPJ%2F%2BLjrZpspiPc5uLpzxML6jt%2FmuaCBM2j2ZKwrVUD%2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPohb0tT6A0Q7alV4q3ANwVvrGrTem3hXjDpHBtSk09%2BL8U6oSlRSK%2FaeblaWmCo2Bl%2BlcVwkDJ0CZ78nLLXtNrANxIwckq0CUDX7gQCzXn%2BfHdxLhMFdB4YGauIsxzxyjVMimampRgGcYccJP%2FgMlmYvwawfDddQWlfSzfR785vuVOaxDFjpmoRbpFe2%2FJBN3OG%2F4bzJkiqDwwpfoBL2dR%2Btk9MDNAnA2HK2S3g4Ahvw0MPjHp5ySQLmB7d%2FdQY76iTpxrehBvegau9g2EADn%2B58SDs78CtTzUAM3XbjVKCV3so%2FlVNmcQax9sk7pht5lFEUU0PX2oSIQXo66rm2vHdJK%2F2py3PzEjADrW7n9DI5tbjulboAeS%2BDupXJkTdV4QuD4%2Bs%2Baq6LxvjIMUxwuWXQKdfNSTFn7y1y29gDsjNQfdc4CP5JMUXDmmwX55WJCcNRaG%2Bx5ihK2LcKbqVrIK7hvyygLvaY%2F%2B%2BLTv4NfVTLXfSsggi8B9GHNi%2Bt3a2uQNFkFr2WkyeJkfTyXuPcJMSKOgGK4rCgZl%2FomQpTXWukpIbTA2MATG1CxtsSOB2lXu46j%2Bw%2Fe9KFwXQ9SgxCgDBlocO7IatA%2Fmo3tbeUPFpY5M5ys5G7GKsoAJn%2Fp0slusPKZgz3FSZ0w3TDkvtbJBjqkATviA6g1%2B69mmPluH1GTXyEGGGXAiHAL8fw8JJuTsLatqQ%2BLblBTizq4hgzVKLIBDe3IkbqfH3Tas8r4Mzp5z9syk4g5k1aUzPXQHtp2dHocHW0ikhOPJnmZ%2BN670JKbgW8DbiSDHs4D7Y152Z%2BaaJL%2FlYB9guee2FBMiNLwpD7qni%2F0WNHO3FMe1%2FfCiUBK56%2Fk6SxW%2FRx4DnquRdXNHigZAUhJ&X-Amz-Signature=76e77c2d509e04ff7ebee34848b091dcb325b3fb1922dc66f9dba901c2787894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

