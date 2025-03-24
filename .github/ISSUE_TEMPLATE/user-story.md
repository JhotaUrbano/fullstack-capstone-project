---
name: User Story
about: This template define user story
title: ''
labels: backlog, bug, documentation, duplicate, enhancement, good first issue, help
  wanted, icebox, question, wontfix
assignees: Manolo, Juan, Pepe. Federeico, Esteban
---

**As a** [role]  
**I need** [function]  
**So that** [benefit]

### Details and Assumptions
* [document what you know]

### Acceptance Criteria
```gherkin
Given [some context]  
When [certain action is taken]  
Then [the outcome of action is observed]

---

### 📌 Historia 1 - `nueva`

```md
**As a** usuario nuevo  
**I need** registrarme en la plataforma  
**So that** pueda acceder a las funciones personalizadas

### Details and Assumptions
* El registro requiere email, nombre y contraseña válidos.

### Acceptance Criteria
```gherkin
Given un usuario que accede a la página de registro  
When completa el formulario correctamente  
Then se crea su cuenta y es redirigido al panel principal


---

### 📌 Historia 2 - `backlog`

```md
**As a** usuario registrado  
**I need** cambiar mi contraseña desde el perfil  
**So that** pueda mantener mi cuenta segura

### Details and Assumptions
* Debe introducir la contraseña actual para confirmar el cambio.

### Acceptance Criteria
```gherkin
Given que el usuario accede a su perfil  
When actualiza su contraseña con una válida  
Then la nueva contraseña se guarda y se confirma el cambio


---

### 📌 Historia 3 - `deuda técnica`

```md
**As a** desarrollador  
**I need** eliminar funciones obsoletas del módulo de login  
**So that** se reduzca la complejidad del código

### Details and Assumptions
* Las funciones afectadas no son llamadas desde ningún componente.

### Acceptance Criteria
```gherkin
Given el código del módulo de login  
When elimino las funciones no utilizadas  
Then la aplicación sigue funcionando sin errores


---

### 📌 Historia 4 - `nevera`

```md
**As a** administrador  
**I need** un panel de métricas del sistema  
**So that** pueda analizar el rendimiento y uso de recursos

### Details and Assumptions
* Se usará Grafana o una solución similar para visualizar métricas.

### Acceptance Criteria
```gherkin
Given que accedo al panel de métricas  
When selecciono un período de tiempo  
Then veo gráficos actualizados del rendimiento del sistema


---

### 📌 Historia 5 - `nueva`

```md
**As a** usuario  
**I need** recibir notificaciones por correo  
**So that** esté informado sobre actualizaciones importantes

### Details and Assumptions
* Las notificaciones se enviarán al email registrado en el perfil.

### Acceptance Criteria
```gherkin
Given una actualización importante del sistema  
When ocurre un cambio relevante  
Then el usuario recibe un email notificándolo


---

### 📌 Historia 6 - `backlog`

```md
**As a** usuario  
**I need** buscar contenido en la aplicación  
**So that** pueda encontrar rápidamente lo que necesito

### Details and Assumptions
* La búsqueda debe ser insensible a mayúsculas/minúsculas.

### Acceptance Criteria
```gherkin
Given que accedo a la barra de búsqueda  
When ingreso un término válido  
Then se muestran los resultados correspondientes


---

### 📌 Historia 7 - `deuda técnica`

```md
**As a** desarrollador  
**I need** actualizar las dependencias del proyecto  
**So that** podamos mantener la seguridad del sistema

### Details and Assumptions
* Deben probarse todos los tests después de la actualización.

### Acceptance Criteria
```gherkin
Given que actualizo las dependencias  
When ejecuto los tests  
Then todos pasan correctamente y el sistema funciona igual


---

### 📌 Historia 8 - `nevera`

```md
**As a** analista  
**I need** exportar reportes de usuarios en Excel  
**So that** pueda analizarlos en otras herramientas

### Details and Assumptions
* El archivo debe incluir nombre, correo y fecha de registro.

### Acceptance Criteria
```gherkin
Given que estoy en la sección de usuarios  
When pulso el botón de "Exportar"  
Then se genera y descarga un archivo Excel con los datos






