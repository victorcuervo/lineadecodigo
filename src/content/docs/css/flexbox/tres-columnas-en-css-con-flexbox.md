---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JIBUVNM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHCiXBv8R8YVs6kDUsj7LCqagEFl6kqveOwGeWeE811AiEAt34LTlzaq%2FZolj7Hjbkptx%2B4FQDwcI2x22SS6D%2BhelMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDA1OOSpqsQEXwwwwgSrcAzM1UhZvV35gaibTH%2BNbjA1m1%2B2rFWUxr%2B9wbh8bOtMfst248DGf24qi52mmy2To%2BCUVy6433DD%2BRTy8s9XxoKYFTdpCptPe6ehFKjH9sh9dPYLtH7UhcOW0IJVqZqKUZ8lDo%2Fuuch%2BXMAkuraQQGLeFrgvDEzpXscBancZ8Q%2FcC47EvqExhtiVXlyqRPEaCIdm0KyLTyPzyrujen6AgSa4xEfqLQDrACsMXWsr0EvZa%2B%2Balz32yIhWtYsCTopjNYGWBkooogKSGHoR5Nbv0IeOFKcMRcNgEGefS0t%2BCbVvr%2Fioy1pSCs4wMJ%2BpkLnenftxP9VldpkMvxBIZGUZm%2BCpm9Q5gl90%2FStCcU2XEuAewFh92jT0%2BuI9rNOq4AyxJCpY%2B%2FOKP%2BdpEoRwAhDVbGaaOjsN9BDBuCnloSY7Z9a8RhJqxhNet4bkSx%2FkSzckL7GjmEI%2BzNgQkMJnpRxNmBgPGclWpO5xxEN56K%2FqZbabHvyFKjQiX8vFRsHLFoBXr0g28XCh9Xtw9vhhH%2Boo1QOoc6d28yHDJIML0sNLxsbMXtPrDnx7Ck%2FtqxOH96rKwZjpe8Q%2BM4%2B5MLUan%2F5HjK7zaHPIO9YWXwQlgFb9VumDsGMGskqEx1gzn5zIuMOT90MkGOqUBWTAAFk42arNZ7JstGYtu5Soyo%2BdRdpKfH3D1FtyXQnH5CAeWRnHFEAICsRAquduYVHBbwCSOdq2sKJHJSIsnnEEqU03d95ixkuppNL5kgFwF9%2BfJ%2B1wPNEzTHmzzYgE9tRJ9DkpUH5ok5rXRRjQvEh770AiSGs5DLdiP8Ymm9oD3HNivV9ssRKnaKWOG4QQqwrj4HrevqIBbgIcZtYjPCS%2FGz8Gx&X-Amz-Signature=c59591f964b1acff34d4b4d7e7f097ebef81a3cc66c48139e92ac5aeaf3acee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JIBUVNM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHCiXBv8R8YVs6kDUsj7LCqagEFl6kqveOwGeWeE811AiEAt34LTlzaq%2FZolj7Hjbkptx%2B4FQDwcI2x22SS6D%2BhelMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDA1OOSpqsQEXwwwwgSrcAzM1UhZvV35gaibTH%2BNbjA1m1%2B2rFWUxr%2B9wbh8bOtMfst248DGf24qi52mmy2To%2BCUVy6433DD%2BRTy8s9XxoKYFTdpCptPe6ehFKjH9sh9dPYLtH7UhcOW0IJVqZqKUZ8lDo%2Fuuch%2BXMAkuraQQGLeFrgvDEzpXscBancZ8Q%2FcC47EvqExhtiVXlyqRPEaCIdm0KyLTyPzyrujen6AgSa4xEfqLQDrACsMXWsr0EvZa%2B%2Balz32yIhWtYsCTopjNYGWBkooogKSGHoR5Nbv0IeOFKcMRcNgEGefS0t%2BCbVvr%2Fioy1pSCs4wMJ%2BpkLnenftxP9VldpkMvxBIZGUZm%2BCpm9Q5gl90%2FStCcU2XEuAewFh92jT0%2BuI9rNOq4AyxJCpY%2B%2FOKP%2BdpEoRwAhDVbGaaOjsN9BDBuCnloSY7Z9a8RhJqxhNet4bkSx%2FkSzckL7GjmEI%2BzNgQkMJnpRxNmBgPGclWpO5xxEN56K%2FqZbabHvyFKjQiX8vFRsHLFoBXr0g28XCh9Xtw9vhhH%2Boo1QOoc6d28yHDJIML0sNLxsbMXtPrDnx7Ck%2FtqxOH96rKwZjpe8Q%2BM4%2B5MLUan%2F5HjK7zaHPIO9YWXwQlgFb9VumDsGMGskqEx1gzn5zIuMOT90MkGOqUBWTAAFk42arNZ7JstGYtu5Soyo%2BdRdpKfH3D1FtyXQnH5CAeWRnHFEAICsRAquduYVHBbwCSOdq2sKJHJSIsnnEEqU03d95ixkuppNL5kgFwF9%2BfJ%2B1wPNEzTHmzzYgE9tRJ9DkpUH5ok5rXRRjQvEh770AiSGs5DLdiP8Ymm9oD3HNivV9ssRKnaKWOG4QQqwrj4HrevqIBbgIcZtYjPCS%2FGz8Gx&X-Amz-Signature=4ce4e9396a57f8a21adf7cc284e589397abd981cc5fe9fd4758c1e04aac7d797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

